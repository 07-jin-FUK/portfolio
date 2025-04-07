import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkCard from "./components/LinkCard";
import "./App.css";

function App() {
  const [showCareer, setShowCareer] = useState(false);
  const [showSelfPR, setShowSelfPR] = useState(false);

  const toggleCareer = () => {
    setShowCareer(!showCareer);
  };

  const toggleSelfPR = () => {
    setShowSelfPR(!showSelfPR);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ページが読み込まれたときにクラスを適用
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 0.1秒の遅延後に表示開始

    return () => clearTimeout(timer); // クリーンアップ
  }, []);
  
  useEffect(() => {
    const videoWraps = document.querySelectorAll(".video-wrap");
  
    videoWraps.forEach((wrap) => {
      const video = wrap.querySelector("video");
      const img = wrap.querySelector(".video-image");
  
      if (video && img) {
        // 動画が再生できたかチェック
        const checkVideo = () => {
          video
            .play()
            .then(() => {
              // 再生成功 → imgを非表示に（あれば）
              img.style.display = "none";
            })
            .catch(() => {
              // 再生失敗 → imgを表示
              video.style.display = "none";
              img.style.display = "block";
            });
        };
  
        checkVideo();
      }
    });
  }, []);
  

  return (    
    <div className={`app fade-in ${isVisible ? "visible" : ""}`}>
      <div className="intro">
      <div className="test-section">
  <p>iOSデバイスの灰色枠テスト</p>

  <div className="test test1">
    <p>① border: none のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"
  
      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>

  <div className="test test2">
    <p>② outline: none のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"
  
      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>

  <div className="test test3">
    <p>③ box-shadow: none のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"
   
      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>

  <div className="test test4">
    <p>④ -webkit-appearance: none のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"
   
      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>

  <div className="test test5">
    <p>⑤ display: block のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"
  
      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>

  <div className="test test6">
    <p>⑥ overflow: hidden のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"

      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>
  
  <div className="test test7">
    <p>⑥ filter: border outline none のみ</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"

      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>

  <div className="test test8">
    <p>⑦ 全部込み（border / outline / box-shadow / appearance / display / overflow / filter）</p>
    <div className="video-wrap">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/img-maker-parts.jpg"
    
      >
        <source src="/images/mov-maker.webm" type="video/webm" />
        <source src="/images/mov-maker.mp4" type="video/mp4" />
      </video>
      <img
        className="video-image"
        src="/images/img-maker-parts.jpg"
        alt="取扱商品"
        loading="lazy"
      />
    </div>
  </div>
</div>


          <div className="profile-name-section">
            <h1 className="name">山本 陣 -Jin Yamamoto-</h1>
            <div className="social-icons">
              <a
                href="https://x.com/Jinyama0902"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/logo-black.png"
                  alt="X"
                  className="icon x-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/jin.yama/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon instagram-icon"
                />
              </a>
              <a
                href="https://github.com/07-jin-FUK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
              </a>
              <a
                href="https://qiita.com/jingle07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/qiita-icon.png"
                  alt="qiita"
                  className="icon qiita-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-info">
            <div className="profile-row">
              <strong>誕生日:</strong>
              <span>1993年9月2日 (age: 31)</span>
            </div>
            <div className="profile-row">
              <strong>趣味:</strong>
              <span>アニメ、漫画、カラオケ、テニス</span>
            </div>
            <div className="profile-row">
              <strong>
                触れた言語・
                <br />
                フレームワーク:
              </strong>
              <span>
                HTML★★★, CSS★★★, JavaScript★★★, React★★★, PHP★★★, SQL★★★,
                Laravel★★, Python★
              </span>
            </div>
            <div className="profile-row">
              <p className="borderTitle">スキル 自己評価基準:</p>
              <span className="border">
                ★★★（ある程度理解して作成できる）,
                ★★（G’sカリキュラム受講レベル）,
                ★（自身で触れた程度、自学レベル）
              </span>
            </div>
          </div>
    

        {/* 経歴セクション */}
        <div className="career common-section">
          <h2 className="career-title common-title" onClick={toggleCareer}>
            経歴 {showCareer ? "▲" : "▼"}
          </h2>
          {showCareer && (
            <div className="career-details common-details">
              <div className="profile-row">
                <strong>2016年3月:</strong>
                <span>
                  <strong>長崎大学工学部</strong>卒業（化学物質工学コース）
                </span>
              </div>
              <div className="profile-row">
                <strong>
                  2016年4月
                  <br />
                  ~2019年12月:
                </strong>
                <span>
                  大学卒業後、<strong>医療機器商社</strong>に営業として就職。{" "}
                  <br />
                  透析関係の部署にて、透析関係商材の営業として勤める <br />
                  途中<strong>機器のメンテナンス兼営業も行う技術課</strong>
                  に転課も経験
                </span>
              </div>
              <div className="profile-row">
                <strong>
                  2020年1月 <br />
                  ~2024年4月:
                </strong>
                <span>
                  <strong> 印刷・包材商社</strong>
                  に転職、デザイナーとクライアントの間に立ち、 <br />
                  紙系商材（名刺、チラシ、箱、パッケージ、貼箱、段ボール）、
                  <br />
                  軟包材関係（印刷袋、冷凍袋）その他パッケージ関連の、 <br />
                  <strong>
                    デザイン提案営業
                  </strong>、納品までトータルサポート <br />
                </span>
              </div>
              <div className="profile-row">
                <strong>
                  2024年4月 <br />
                  ~現在:
                </strong>
                <span>
                  <strong>G’s ACADEMY FUKUOKA LAB10</strong>
                  として入学し、今秋10月に卒業。 <br />
                  新生活に向け、技術の勉強かつ、転職活動中
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="self-pr common-section">
          <h2 className="self-pr-title common-title" onClick={toggleSelfPR}>
            自己PR {showSelfPR ? "▲" : "▼"}
          </h2>
          {showSelfPR && (
            <div className="self-pr-details common-details">
              <p>
                私はこれまで約8年間営業職やデザイン提案業務を通じて、
                <br />
                多くのクライアントと関わり、
                <br />
                問題解決能力やコミュニケーションスキルを磨いてきました。
                <br />
                プログラミングにおいても、常に新しい技術を学び続ける姿勢を持ち、
                <br />
                チーム開発では積極的に自分の意見を発信することを心掛けています。
              </p>
              <p>
                また、自分の個性を活かしたプロジェクト作りが得意です。
                <br />
                人と異なるものができると素直にうれしいです。
                <br />
                特にフロントエンド側の作業は好きで、
                <br />
                見た人の心がわくわくするようなプロダクトづくりを心掛けてきました。
                <br />
                卒業制作ではフロントエンドもバックエンドもどちらも挑戦し、
                <br />
                良質なプロダクトには片方のみの知識では到底届かないと気付き、
                <br />
                現在、バックエンドも勉強しています。
                <br />
                今後はフロントエンドとバックエンドのスキルをさらに伸ばし、
                <br />
                幅広い分野で活躍できるエンジニアを目指しています。
              </p>
            </div>
          )}
        </div>
      </div>

      <h1>My Portfolio</h1>
      <p>It all started with cheese.</p>
      <h2 className="section-title"> New Products‼</h2>
      <div className="link-cards">
        <LinkCard
          text="徒競走（運ゲー）"
          url="https://king-game.vercel.app/"
          imageUrl="/images/king.jpg"
          githubUrls={["https://github.com/07-jin-FUK/SimpleRace"]}
          description="だれか一人優勝者を決めるシンプルなレースゲームを作成しました。"
        />
      </div>
      <h2 className="section-title">フロントエンドプロダクト</h2>
      <div className="link-cards">
        <LinkCard
          text="CheeseAcademy(初回課題HTML/CSS講義)"
          url="https://07-jin-fuk.github.io/ti-zulast/"
          imageUrl="/images/ti-zu.jpg"
          githubUrls={["https://github.com/07-jin-fuk/ti-zulast"]}
          description="ジーズアカデミー入学後初めての課題に取り組みました。何か人と異なることをしたく素人ながらにあがきました。"
        />
        <LinkCard
          text="PokemonWorld(2回目課題Javascript講義)"
          url="https://07-jin-fuk.github.io/janken/"
          imageUrl="/images/pokemon2.jpg"
          githubUrls={["https://github.com/07-jin-fuk/janken"]}
          description="課題内容はじゃんけんアプリを作ろう。でしたが、オリジナリティを出すため、ポケモンの世界を少しでも再現できるよう作成しました。"
        />
        <LinkCard
          text="TODOmemo(3回目課題localstorage講義）"
          url="https://07-jin-fuk.github.io/TODOmemo/"
          imageUrl="/images/TODOmemo.jpg"
          githubUrls={["https://github.com/07-jin-fuk/TODOmemo"]}
          description="LocalStorageを利用したシンプルなTODOリストアプリ課題です。好きな女優さんをTODOが埋め尽くさないようタスクを少しでも減らすという願いを込めました。"
        />
        <LinkCard
          text="like LINE(4回目課題Firebase講義)"
          url="https://07-jin-fuk.github.io/LINE-/"
          imageUrl="/images/LINE.jpg"
          githubUrls={["https://github.com/07-jin-fuk/LINE-"]}
          description="LINE風のチャットアプリを作成してみました。リアルタイムのメッセージ送受信が可能です。"
        />
        <LinkCard
          text="夜景スポットAPI(5回目課題API講義)"
          url="https://07-jin-fuk.github.io/API-plactice/"
          imageUrl="/images/yakei.jpg"
          githubUrls={["https://github.com/07-jin-fuk/API-plactice"]}
          description="外部APIを活用する課題です。夜景スポットを堪能するためのアプリを作成しました。各都道府県で楽天APIを用いて、夜景の見えそうなスポット付近の宿泊情報を検索できます。"
        />
        <LinkCard
          text="家計簿アプリ(JavaScript選手権)"
          url="https://07-jin-fuk.github.io/JSLast/"
          imageUrl="/images/家計簿アプリ.jpg"
          githubUrls={["https://github.com/07-jin-fuk/JSLast"]}
          description="JS選手権での自由課題です。収入と支出を記録するための家計簿アプリです。TypeScriptを用いて挑戦してみました。（※現在はFirebaseと連携させていないので、UIのみ確認可能で、登録はできません。）"
        />
        <LinkCard
          text="SQLクイズ対戦ゲーム(チーム開発担当箇所)"
          url="https://gameoversquiz.onrender.com/"
          imageUrl="/images/SQLquiz.jpg"
          githubUrl="https://github.com/07-jin-FUK/gameoversquiz"
          githubUrls={["https://github.com/07-jin-FUK/gameoversquiz"]}
          description="チーム開発課題です（今URLは担当部分のみ）。3人チームで私はこのSQLクイズを担当しました。WebSocketを用い、2台異なるパソコンでの対戦を可能としています。"
        />
        <LinkCard
          text="WhyFight (チーム開発)"
          url="https://axella1.sakura.ne.jp/project/splash"
          imageUrl="/images/WhyFight.jpg"
          githubUrls={[
            "https://github.com/sulpont/whyfight",
            "https://github.com/07-jin-FUK/gameoversquiz",
          ]}
          description="先ほどのチーム開発の完成プロダクトです。ログイン後、私のクイズか、SF2を再現したゲームへと進めます。（GitHub1 Laravel側 GitHub2 クイズ側）"
        />
        <LinkCard
          text="SizeSnap (卒業制作)"
          url="https://objectsize-fine.vercel.app/"
          imageUrl="/images/SizeSnap.jpg"
          githubUrls={[
            "https://github.com/07-jin-FUK/objectsize-fine",
            "https://github.com/07-jin-FUK/Python-api",
          ]}
          description="卒業制作で作りました、2つモードを開発し、サイズ測定モードと、引っ越し・模様替えモードを作りました。模様替えモードは仕様書以上を作るため、現在改良中です。（画像も反映できるように変更中のためDB設計を変更しておりますので保存ができない状況です。通常使用は問題なく可能です。）バックエンドではPythonを使用しています。(GitHub1 フロント GitHub2 バックエンド)"
        />
      </div>
      <h2 className="section-title backend-title">バックエンドプロダクト</h2>
      <p className="coming-soon">Coming Soon</p>
    </div>
  );
}

export default App;
