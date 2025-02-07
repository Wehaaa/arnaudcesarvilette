'use client';

import React from 'react';
import { parseHtml } from '@/utils/parseContent';
import styles from "./ContentBlocks.module.css";

interface ContentBlocksProps {
  content: string;
}

const ContentBlocks: React.FC<ContentBlocksProps> = ({ content }) => {
  const html = parseHtml(content);
  
  return (
    <div className={styles.contentBlocks}>
      {html}
    </div>
  );
};

export default ContentBlocks;