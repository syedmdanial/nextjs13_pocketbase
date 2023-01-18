import { Inter } from '@next/font/google';
import styles from '../styles/Notes.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Some content</p>
    </div>
  );
}
