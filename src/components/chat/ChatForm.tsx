export default function ChatForm() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#fff",
          padding: "16px 0",
          borderTop: "1px solid #eee",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            maxWidth: 800, // ← 中央に収まるサイズ感
            margin: "0 auto", // ← 中央揃え
            padding: "0 16px", // ← 横方向の余白
          }}
        >
          <input
            type="text"
            placeholder="メッセージを入力..."
            style={{
              flex: 1, // ← 自動で伸縮
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "10px 16px",
              background: "#006BD6",
              color: "white",
              borderRadius: 10,
              border: "none",
              whiteSpace: "nowrap",
            }}
          >
            送信
          </button>
        </div>
      </div>
    );
  }
  