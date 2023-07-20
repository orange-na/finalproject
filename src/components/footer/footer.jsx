import Link from 'next/link'
import css from './footer.module.scss'

export function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.footeritems}>
                <div className={css.footerlogo}>
                    <h1>YutoCode</h1>
                </div>
                <div className={css.footerlist}>
                    <p>Connect with us</p>
                    <Link href='/'>Email</Link>
                    <Link href='/'>Email</Link>
                    <Link href='/'>Email</Link>
                    <Link href='/'>Email</Link>
                    <Link href='/'>Email</Link>
                    <Link href='/'>Email</Link>
                    <Link href='/'>Email</Link>
                </div>
                <div className={css.footerlist}>
                    <p>Connect with us</p>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                </div>
                <div className={css.footerlist}>
                    <p>Connect with us</p>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                        <Link href='/'>Email</Link>
                </div>
            </div>
        </footer>
    )
  }
  