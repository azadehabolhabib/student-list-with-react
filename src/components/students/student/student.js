import React from "react";
import styles from './students.module.css';

const Student=(props)=>{

    return(
        <div className={styles.students}>
            <lable className={styles.lables} >شماره دانش آموزی:{props.id}</lable>

            <lable className={styles.lables}>نام و نام خانوادگی</lable>
            <input className={styles.input} type="text" value={props.name}/>

            <lable className={styles.lables}>کلاس</lable>
            <input className={styles.input} type="number"  value={props.classNumber}/>

            <lable className={styles.lables}>شماره تلفن</lable>
            <input className={styles.input} type="number"  value={props.phoneNumber}/>
            <lable className={styles.lables}>ایمیل</lable>
            <input className={styles.input} type="email" value={props.Email}/>

        </div>
    )
}
export default Student;