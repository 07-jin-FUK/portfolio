import React, { useState } from "react";

function LinkCard({
  text,
  url,
  imageUrl,
  description,
  githubUrls = [],
  specUrl,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="link-card-wrapper">
      <div className="link-card" onClick={handleOpenPopup}>
        <img src={imageUrl} alt={text} className="link-image" />
        <div className="link-text">{text}</div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt={text} className="popup-image" />
            <h2>{text}</h2>
            <p>{description}</p>
            <div className="popup-buttons">
              <button
                className="popup-button"
                onClick={() => window.open(url, "_blank")}
              >
                ビューorデプロイへ
              </button>
              {githubUrls.map((githubUrl, index) => (
                <button
                  key={index}
                  className="popup-button"
                  onClick={() => window.open(githubUrl, "_blank")}
                >
                  GitHub {index + 1} へ
                </button>
              ))}
              {specUrl && (
                <button
                  className="popup-button"
                  onClick={() => window.open(specUrl, "_blank")}
                >
                  仕様書を見る
                </button>
              )}
              <button className="popup-close" onClick={handleClosePopup}>
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LinkCard;
