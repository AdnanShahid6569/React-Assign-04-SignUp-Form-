import React from 'react'
import styles from "./SignUp.module.css"
import user from "../../assets/login.webp"

const SignUp = () => {
  return (
    <div className={styles.form}>
    <div className={styles.container}>
        <div className={styles.SignUp}>
            <h1>SignUp</h1>
            <p>Already have an account?<a href=""> Login here</a></p>
<br /><b></b>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input style={{marginLeft:"25px"}}  className={styles.inp}
             type="text" id='name'  placeholder='Enter your Name here'/>
<br /><br />
            <label htmlFor="id" className={styles.label}>Email ID</label>
            <input style={{marginLeft:"3px"}} className={styles.inp}
             type="text" id="id" placeholder='Enter your email id here'/>
<br /><br />
            <label htmlFor="pass" className={styles.label} >Password</label>
            <input className={styles.inp}
             type="text" id="pass" placeholder='Enter your password here'/>
<br /><br />
            <input type="checkbox" id='check' />
            <label htmlFor="check">But Signing Up your agree to receive updates and special offers</label>

<br /><br />
            <button className={styles.btn}>Submit</button>
        </div>

        <div className={styles.img}>
            <img src={user} alt="" />
        </div>
    </div>
    </div>
  )
}

export default SignUp