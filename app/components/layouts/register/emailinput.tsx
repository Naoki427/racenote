"use client"
import React, { useState } from 'react';
import styles from '@/app/components/layouts/register/styles/emailinput.module.css'

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert(`${email}に確認用のメールが送信されました！`);
      // ここでメールアドレスを送信するロジックを追加できます
    } else {
      alert('有効なメールアドレスを入力してください。');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <div className={styles.inputContainer}>
        <label className={styles.emailLabel} htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="例: racenote@example.com"
          style={{ /*borderColor: isValid ? 'black' : 'red',*/
                    padding: '8px',
                    backgroundColor: isFocused ? '#fff' : '#d9d9d9',
                    border: `1px solid ${isFocused ? '#121212' : '#b3b3b3'}`
                  }}
          required
          className={styles.inputBox}
        />
        {/* {!isValid && <p style={{ color: 'red' }}>有効なメールアドレスを入力してください。</p>} */}
      </div>
      <button type="submit" className={styles.submitButton}>
        <div className={styles.submitText}>
          認証メールを送信する
        </div>
        </button>
    </form>
  );
};

export default EmailInput;
