import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''       
        }
    }
   
    render () {
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Info</h4>
                <form>
                    <input className={styles.Input} type='text' name='name' placeholder='Your Name' />
                    <input className={styles.Input} type='emial' name='email' placeholder='Your email' />
                    <input className={styles.Input} type='text' name='street' placeholder='Street' />
                    <input className={styles.Input} type='text' name='zip' placeholder='Zip Code' />
                <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        );
    }
    
}



export default ContactData;