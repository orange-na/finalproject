import Link from "next/link"
import css from "./header.module.scss"

export function Header() {
    return (
        <header className={css.header}>
            <div>
                <h1><Link href='/'>YutoCode</Link></h1>
                <ul>
                    <li><Link href='/home'>Home</Link></li>
                    <li><Link href='/pricing'>Pricing</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/features'>Features</Link></li>
                    <li><Link href='/login'>Login</Link></li>
                    <li className={css.freetrial}><Link href='/free'>Start for free</Link></li>
                </ul>
            </div>
        </header>
    )
  }
  