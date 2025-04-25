export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10 space-y-8 grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <h1 className="text-4xl font-bold text-center text-blue-700">411081005 温桓瑄の網站</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">🔍 職涯測驗結果</h2>
            <p>
              我使用 104 人力銀行的何倫碼職涯測驗，結果顯示我屬於「實作型（R）」與「常規型（C）」的組合，
              表示我比較適合做結構穩定、規律性的工作，像是 MIS 系統維運、資料管理等職位。
              測驗也顯示我對技術有基本的興趣，但不是那種會整天鑽研技術的類型，比較喜歡照著流程做事，能清楚完成交付的工作。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">💼 興趣職缺介紹</h2>
            <p>
              以下是一份我在 104 上找到，感覺蠻適合自己的 MIS 類職缺：
            </p>
            <ul className="list-disc pl-6">
              <li><strong>公司：</strong>叡揚資訊股份有限公司</li>
              <li><strong>職稱：</strong>MIS系統工程師</li>
              <li><strong>地點：</strong>台北市中山區</li>
              <li><strong>工作內容：</strong>我們正在招募全職夥伴加入我們的MIS，
協助企業維護日常 IT 環境，同時強化資訊安全防護措施。</li>
              <li><strong>需求條件：</strong>對資訊系統有基本了解、能配合日常維運工作，具備責任感與穩定性</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">📄 自傳與履歷</h2>
            <p>
              我目前是資訊管理系大四學生，雖然程式能力不是特別強，但在學期間有學過 HTML、JavaScript、
              Python 及資料庫基本操作。我對資訊相關的事物有興趣，尤其是比較偏向系統維護、資料管理這類實務性工作。
              <br /><br />
              在學期間曾參與過校內的小組專題，幫忙設計一個簡單的 linebot 系統介面。過程中雖然遇到不少困難，
              但我還是有努力完成負責的部份，也學會跟組員分工協作。
              <br /><br />
              我個性比較穩定，喜歡有規律的工作內容，工作態度負責，不挑工作內容，只希望能進入穩定的公司累積經驗。
              希望未來能在 MIS 系統維運或資訊行政支援等工作上發揮所長。
            </p>
          </section>
        </div>

        {/* 右半邊欄位 */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">🔗 我的社交媒體</h2>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/viper_0301/" className="text-blue-500 hover:underline">Instagram</a></li>
              <li><a href="https://github.com/viper0301" className="text-blue-500 hover:underline">GitHub</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100009587625645" className="text-blue-500 hover:underline">Facebook</a></li>
            </ul>
          </section>

          {/* 個人照片與職缺連結區塊 */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600"> 個人照片 </h2>
            <img 
              src="/profile.jpg" 
              alt="個人照片" 
              className="mx-auto rounded-full w-70 h-70 object-cover border-4 border-blue-200 shadow-lg"
            />
            <div className="mt-4">
              <a 
                href="https://www.104.com.tw/job/8ox8m?jobsource=index_s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                查看我感興趣的職缺
              </a>
            </div>
          </section>
        </div>
      </div>

      <footer className="text-center text-gray-500 pt-6 border-t">
        Made with ❤️ by 411081005 温桓瑄 | 部署於 Vercel
      </footer>
    </main>
  );
}
