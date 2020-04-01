import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const Thanks = () => {
  return (
    <Box m={2}>
      <Typography variant="h5" align="center">
        送信完了
      </Typography>
      <p>
        <Typography variant="body1">
          お問い合わせありがとうございます。
          <br />
          入力されたメールアドレス宛に確認メールを送信しました。
          <br />
          担当者より回答いたしますのでしばらくお待ちください。
        </Typography>
      </p>
      <Link href="/">
        <Button
          variant="contained"
          style={{ display: 'block', margin: 'auto' }}
        >
          HOME へ戻る
        </Button>
      </Link>
    </Box>
  );
};

export default Thanks;
