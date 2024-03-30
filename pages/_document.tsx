import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <script
          defer
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
