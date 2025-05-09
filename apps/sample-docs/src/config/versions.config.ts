/**
 * バージョン情報の設定
 */
import type { Version } from '@docs/versioning';

const versions: Version[] = [
  { 
    id: 'v1', 
    name: 'Version 1.0', 
    date: new Date('2024-01-01'), 
    isLatest: false 
  },
  { 
    id: 'v2', 
    name: 'Version 2.0', 
    date: new Date('2025-01-01'), 
    isLatest: true 
  }
];

export default versions;
