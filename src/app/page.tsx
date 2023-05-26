import Image from 'next/image'
import styles from './page.module.css'
import Qr from '@/Components/QR/Qr'

export default function Home() {
  return (
    <main className={styles.main}>
     <Qr/>
    </main>
  )
}
