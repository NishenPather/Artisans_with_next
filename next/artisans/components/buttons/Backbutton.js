import Router from 'next/router'
import styles from '../../styles/Home.module.css'

export default function BackButton() {
    return (
        <button onClick={() => Router.back()}>Previous page</button>
    )
}