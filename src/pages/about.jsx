import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const About = () => {
  return (
    <Container>
      <Box mt={2}>
        <Typography variant="h5" component="h1" color="primary">
          MLJP SCRIM とは
        </Typography>
      </Box>

      <Typography variant="body1" component="section">
        <p>
          スクリムは scrimmage
          (スクリメージ)の略で、&ldquo;前哨戦(ぜんしょうせん)&rdquo;という意味です。大会を本番とした時の模擬戦、練習試合になります。
        </p>
        <p>
          大会に出る人って腕に自信がある人が多いですよね。更に予選を勝ち上がると強い人ばかりになってきます。強い人ばかりのマッチだと通常のドラフトピックとは立ち回り方が変わってきます。そういった大会ならではの動きを練習する為に開催されるのが&ldquo;スクリム&rdquo;になります。
        </p>
      </Typography>

      <Box mb={2}>
        <Typography variant="h6" component="h2" color="primary">
          MLJP ルール 2020.01.25 改定
        </Typography>
      </Box>

      <Typography variant="subtitle1" component="h3" color="primary">
        1. 参加規則
      </Typography>

      <ul>
        <li>当スクリムは 20 チームまでの参加枠とする</li>
        <li>
          参加チームは応募時に主要メンバーが 5 名以上、現ミシックである事とする
        </li>
        <li>主催が独自に判断し参加可否を決定することとする</li>
      </ul>

      <Typography variant="subtitle1" component="h3" color="primary">
        2. 運用規則
      </Typography>

      <ul>
        <li>参加チームは最低週 1 回以上のスクリム要請を出す事とする</li>
        <li>
          参加要請は毎日 18:00
          までに専用ディスコードにて参加可否の報告をする事とする
        </li>
        <li>主催は毎日 20:00 までに対戦カードをメンバーに告知する</li>
        <li>スクリムは基本 22:00 開始の BO3 とする</li>
        <li>スクリムで使用するカスタムルームでの観戦枠は使用禁止とする</li>
        <li>
          試合参加メンバーが急遽参加不可となった際、対戦相手の了承があった場合 1
          名のみ助っ人可能とする
        </li>
        <li>
          スクリム終了後に勝利チームは専用フォームにて戦績報告を行う事とする
        </li>
        <li>
          勝利チームは敗北チームの「良かった点・悪かった点」をアドバイスする事を義務とする
        </li>
        <li>
          各チーム所属ストリーマーは自身のスクリムを配信可能とする。但しスクリム参加可否の連絡時に報告必須とする
        </li>
        <li>
          当スクリムは毎週平日 1 回、土日 1 回、主催の YouTube
          チャンネルにて公開スクリムを行う
        </li>
        <li>
          毎週日曜日に翌週分の対戦カード・スケジュールをスクリム内で連絡し、次週月曜日に
          SNS で告知する事とする
        </li>
      </ul>

      <Typography variant="subtitle1" component="h3" color="primary">
        3. 当スクリム内での煽り暴言晒し
      </Typography>

      <ul>
        <li>
          当スクリム内で発生した煽り暴言晒し行為については厳しく処罰するものとする
        </li>
        <li>
          戦績報告フォームに報告欄を設置しスクリム内で発生した問題を匿名で報告出来る物とする
        </li>
        <li>
          スクリム中での ALL
          チャット(クイックチャット含む)の使用は連絡事項(ラグ等)以外使用禁止とする
        </li>
        <li>スクリム中でのリコール連打は煽り行為と判断し禁止とする</li>
        <li>
          スクリム中でのエモートは使用可能とする。但し相手チームが不快と感じた場合即時使用禁止とする
        </li>
        <li>
          SNS
          等で当スクリムのリザルト画面の共有は禁止とする。ただしマッチング画面や待機画面の共有は可能とする
        </li>
        <li>
          当スクリムに関する過度な暴言や晒し行為を SNS 等で上げる事を禁止する
        </li>
        <li>
          参加チームメンバーの行動が当スクリムにとって不利益となると判断した場合主催は該当チームの参加を取り消す事を可能とする
        </li>
        <li>
          基本は厳重注意だが極めて悪質と判断した場合のみ注意無しで参加を取り消す
        </li>
      </ul>
      <style jsx>{`
        ul {
          padding-inline-start: 16px;
        }
        li {
          line-height: 1.5;
        }
      `}</style>

      <Box mb={2}>
        <Typography variant="body1">以上</Typography>
      </Box>
    </Container>
  );
};

export default About;
