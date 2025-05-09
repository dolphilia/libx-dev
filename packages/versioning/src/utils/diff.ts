/**
 * 差分表示ユーティリティ
 * 
 * このモジュールは、ドキュメントのバージョン間の差分を表示するための
 * ユーティリティ関数を提供します。
 */

import * as diffLib from 'diff';

export interface DiffResult {
  type: 'added' | 'removed' | 'unchanged';
  value: string;
  lineNumber?: {
    old?: number;
    new?: number;
  };
}

export interface DiffOptions {
  ignoreWhitespace?: boolean;
  context?: number;
}

/**
 * 2つのテキスト間の行単位の差分を計算します
 */
export function diffLines(
  oldText: string,
  newText: string,
  options: DiffOptions = {}
): DiffResult[] {
  const { ignoreWhitespace = false, context = 3 } = options;
  
  // diffライブラリを使用して差分を計算
  const changes = diffLib.diffLines(oldText, newText, {
    ignoreWhitespace
  });
  
  // 行番号を追跡
  let oldLineNumber = 1;
  let newLineNumber = 1;
  
  // 差分結果を変換
  const results: DiffResult[] = [];
  
  changes.forEach(change => {
    const lines = change.value.split('\n');
    // 最後の空行を削除（改行コードの扱いによる）
    if (lines[lines.length - 1] === '') {
      lines.pop();
    }
    
    lines.forEach(line => {
      const result: DiffResult = {
        value: line,
        lineNumber: {}
      };
      
      if (change.added) {
        result.type = 'added';
        result.lineNumber.new = newLineNumber++;
      } else if (change.removed) {
        result.type = 'removed';
        result.lineNumber.old = oldLineNumber++;
      } else {
        result.type = 'unchanged';
        result.lineNumber.old = oldLineNumber++;
        result.lineNumber.new = newLineNumber++;
      }
      
      results.push(result);
    });
  });
  
  // コンテキスト行数の制限を適用
  if (context !== undefined && context >= 0) {
    return limitDiffContext(results, context);
  }
  
  return results;
}

/**
 * 差分結果のコンテキスト行数を制限します
 */
function limitDiffContext(results: DiffResult[], context: number): DiffResult[] {
  if (context === Infinity) {
    return results;
  }
  
  const limitedResults: DiffResult[] = [];
  let inChangePart = false;
  let unchangedCount = 0;
  
  // 変更部分の前後に指定された行数のコンテキストを残す
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    
    if (result.type !== 'unchanged') {
      // 変更行の場合
      if (!inChangePart && i > 0) {
        // 変更部分の開始: 前のコンテキストを追加
        const startIdx = Math.max(0, i - context);
        for (let j = startIdx; j < i; j++) {
          limitedResults.push(results[j]);
        }
      }
      
      limitedResults.push(result);
      inChangePart = true;
      unchangedCount = 0;
    } else {
      // 未変更行の場合
      if (inChangePart) {
        unchangedCount++;
        if (unchangedCount <= context) {
          // 変更部分の後のコンテキスト
          limitedResults.push(result);
        } else {
          // コンテキスト行数を超えた場合
          inChangePart = false;
        }
      }
    }
  }
  
  return limitedResults;
}

/**
 * 2つのテキスト間の単語単位の差分を計算します
 */
export function diffWords(
  oldText: string,
  newText: string,
  options: DiffOptions = {}
): DiffResult[] {
  const { ignoreWhitespace = false } = options;
  
  // diffライブラリを使用して単語単位の差分を計算
  const changes = diffLib.diffWords(oldText, newText, {
    ignoreWhitespace
  });
  
  // 差分結果を変換
  return changes.map(change => {
    const result: DiffResult = {
      value: change.value
    };
    
    if (change.added) {
      result.type = 'added';
    } else if (change.removed) {
      result.type = 'removed';
    } else {
      result.type = 'unchanged';
    }
    
    return result;
  });
}

/**
 * HTMLフォーマットの差分を生成します
 */
export function createHtmlDiff(diffResults: DiffResult[]): string {
  let html = '';
  
  diffResults.forEach(result => {
    let className = '';
    let linePrefix = '';
    
    switch (result.type) {
      case 'added':
        className = 'diff-added';
        linePrefix = '+';
        break;
      case 'removed':
        className = 'diff-removed';
        linePrefix = '-';
        break;
      case 'unchanged':
        className = 'diff-unchanged';
        linePrefix = ' ';
        break;
    }
    
    // 行番号の表示
    let lineNumberHtml = '';
    if (result.lineNumber) {
      const oldLineNum = result.lineNumber.old || '';
      const newLineNum = result.lineNumber.new || '';
      lineNumberHtml = `<span class="diff-line-number">${oldLineNum}</span><span class="diff-line-number">${newLineNum}</span>`;
    }
    
    html += `<div class="diff-line ${className}">${lineNumberHtml}<span class="diff-prefix">${linePrefix}</span><span class="diff-content">${escapeHtml(result.value)}</span></div>`;
  });
  
  return html;
}

/**
 * HTMLエスケープ
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
