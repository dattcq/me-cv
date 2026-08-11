import { CVData } from "@/types/cv";

export const initialCVData: CVData = {
  personal_info: {
    name: "TRƯƠNG CÔNG QUỐC ĐẠT",
    title: "Flutter Developer",
    phone: "0333 775 388",
    email: "dattruong2596@gmail.com",
    address: "Dương Văn Bé, phường Vĩnh Tuy, Hà Nội",
  },
  education: [
    {
      school: "Đại học Xây Dựng",
      period: "2014 - 2019",
      major: "Công Nghệ Thông Tin - Chuyên ngành: Công nghệ phần mềm",
    },
  ],
  career_objective: {
    summary:
      "Mobile Developer với 3+ năm kinh nghiệm Flutter và nền tảng 2+ năm QA/Tester — sự kết hợp giúp tôi vừa xây dựng tính năng vừa chủ động kiểm soát chất lượng từ sớm. Tôi có kinh nghiệm thực chiến trên các dự án enterprise quy mô vừa và lớn, từ thiết kế kiến trúc đa tầng đến tích hợp sâu với phần cứng và triển khai CI/CD production.",
    goal:
      "Mục tiêu hướng tới là trở thành Full-stack Developer, mục tiêu ngắn hạn là tập trung nâng cao năng lực Mobile về tối ưu hiệu năng iOS/Android và kiến trúc mở rộng được, sau đó mở rộng sang Backend với RESTful API, Database và Server Deployment.",
  },
  skills: {
    "Ngôn ngữ & Kiến trúc": "Dart 3.8+, Clean Architecture, Feature-driven Architecture, GetIt (DI)",
    "State Management": "BLoC/Cubit, Riverpod 2.0+, GetX, Provider",
    "Native & Tích hợp phần cứng": "Platform Channels (iOS/Android), Dart Isolates, NFC Kit (đọc chip CCCD), Google ML Kit (OCR, Face Detection/Liveness), Google Maps SDK, Geolocator, Biometric Auth (FaceID/TouchID), MQTT",
    "eKYC Pipeline": "Camera OCR bóc tách giấy tờ, NFC CCCD chip reader, Liveness Check chống giả mạo, Ký số điện tử",
    "Networking & Backend": "Dio (Custom Interceptors, Token Refresh, Error Handling), Firebase (FCM, Crashlytics, Firestore, Storage), Auth0, RESTful API",
    "Cơ sở dữ liệu cục bộ": "Isar NoSQL, Secure Storage, SharedPreferences",
    "CI/CD & Release": "GitHub Actions, Fastlane, Codemagic, Shorebird OTA Code Push",
    "Công cụ & Khác": "Figma, AI Coding Tools (Cursor, Antigravity)",
  },
  experience: [
    {
      company: "CÔNG TY CP CÔNG NGHỆ VI MÔ",
      role: "Mobile Developer",
      period: "03/2023 - Hiện nay",
      description:
        "Chuẩn hóa cấu trúc project theo Feature-driven và GetX, tự thực hiện kiểm thử trên thiết bị thật để cover edge-cases trước khi bàn giao cho QA.",
      projects: [
        {
          name: "1. MyNextpay – CRM/ERP Nội bộ cho Sale & Telesale",
          details: [
            "Mô tả: Ứng dụng quản lý công việc hàng ngày cho đội ngũ kinh doanh ~200 ~500 nhân sự NextPay toàn quốc.",
            "Xây dựng luồng Check-in/Check-out GPS hiện trường: tích hợp Google Maps SDK, Geolocator và đồng bộ thời gian NTP để đảm bảo tính chính xác khi xác thực vị trí nhân sự.",
            "Phát triển luồng eKYC và chứng từ: quét tài liệu qua Camera, đọc mã QR/Barcode, ký số điện tử trực tiếp trên màn hình, hỗ trợ tự động hóa quy trình tạo hợp đồng và phụ lục.",
            "Phát triển trọn vẹn các nghiệp vụ cốt lõi: tạo mới hợp đồng dịch vụ, phiếu hỗ trợ kỹ thuật, điều chuyển thiết bị mPOS/Smart POS và tra cứu điểm chấp nhận thanh toán.",
            "Triển khai Shorebird Code Push, rút ngắn thời gian phản hồi khi có sự cố production.",
            "Tech Stack: Flutter, GetX, Dio, Google Maps SDK, Mobile Scanner, Signature, Firebase, Shorebird",
          ],
        },
        {
          name: "2. OriX – Nền tảng Tiếp thị & Phân phối cho Cộng tác viên",
          details: [
            "Mô tả: Ứng dụng B2C và Affiliate phục vụ mạng lưới cộng tác viên kinh doanh thiết bị thanh toán (Tingbox, Smart POS).",
            "Xây dựng luồng xác thực sinh trắc học FaceID/TouchID kết hợp mã hóa Crypto để bảo vệ token API.",
            "Phát triển giao diện sơ đồ cây giới thiệu cộng tác viên đa cấp, bảng thống kê doanh số động và nhúng InAppWebView cho luồng đặt hàng trực tuyến.",
            "Xử lý tải, lưu ảnh marketing độ phân giải cao vào thư viện điện thoại và chia sẻ lên các mạng xã hội qua share_plus và image_gallery_saver.",
            "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird",
          ],
        },
        {
          name: "3. Tingbox (trước đây là MPOS360) – Ứng dụng quản lý Merchant",
          details: [
            "Mô tả: Ứng dụng quản lý dành cho các đối tác mPOS, giúp theo dõi giao dịch một cách hiệu quả và nhận thông báo giao dịch theo thời gian thực thông qua MQTT.",
            "Đóng góp: Hỗ trợ fix bugs, phát triển UI, thực hiện các task nhỏ khi dự án cần.",
            "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird, MQTT",
          ],
        },
        {
          name: "4. NextShop – Ứng dụng quản lý bán hàng",
          details: [
            "Mô tả: Giải pháp quản lý bán hàng giúp các cửa hàng theo dõi hoạt động kinh doanh và quản lý hàng tồn kho hiệu quả trên thiết bị di động.",
            "Đóng góp: Hỗ trợ fix bugs, phát triển UI, thực hiện các task nhỏ khi dự án cần.",
            "Tech Stack: Flutter, Provider + MobX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase",
          ],
        },
      ],
    },
    {
      company: "CÔNG TY CP TẬP ĐOÀN CHUYỂN ĐỔI SỐ NEXTPAY",
      role: "Tester",
      period: "12/2020 - 03/2023",
      description:
        "Đảm bảo chất lượng phần mềm cho hệ sinh thái MyNextpay (Web & Mobile) — sản phẩm phục vụ quy trình kinh doanh nội bộ phức tạp của đội ngũ Sale/Telesale toàn quốc.",
      details: [
        "Review tài liệu BA/SRS để phát hiện mâu thuẫn nghiệp vụ từ sớm, sau đó thiết kế test cases bao phủ các luồng chính và edge cases: quản lý hợp đồng, luồng thanh toán, check-in theo vị trí địa lý.",
        "Kiểm thử REST API bằng Postman, xác thực tính đúng đắn của response data, status code và xử lý lỗi. Kiểm tra độ tương thích UI/UX trên đa nền tảng Web, iOS và Android.",
        "Thực hiện Regression Testing trước mỗi release, quản lý file test case bằng Excel và theo dõi vòng đời bug qua Redmine, làm việc trực tiếp với Dev để phân tích nguyên nhân và đẩy nhanh fix lỗi.",
        "Tận dụng quá trình kiểm thử để nắm sâu business flow và kiến trúc ứng dụng, chủ động tự học Flutter và được tin tưởng chuyển đổi nội bộ thành công sang vị trí Mobile Developer.",
      ],
    },
  ],
  personal_projects: [
    {
      name: "MeTools - Khung Kiến Trúc Đa Tầng & Bộ Giải Pháp Nền Tảng Flutter",
      role: "Mobile Developer + Tester",
      period: "06/2026 - Hiện nay",
      details: [
        "Mô tả: Khung kiến trúc phần mềm và bộ tiện ích cốt lõi chuẩn Enterprise được thiết kế để giải quyết các bài toán kỹ thuật phức tạp trong phát triển ứng dụng Flutter quy mô lớn.",
        "Multi-State Sandbox: Phân lớp độc lập domain/data, triển khai song song GetX + BLoC/Cubit + Riverpod 2.0+ → tái sử dụng 100% business logic.",
        "eKYC Full-stack: Camera OCR bóc tách thông tin CCCD · NFC chip reader · Liveness Check chống giả mạo khuôn mặt.",
        "Platform Channels + Isolates: Giao tiếp 2 chiều iOS/Android với ngoại vi IoT; xử lý tác vụ nặng không block UI Thread.",
        "GIS & Offline Sync: Theo dõi lộ trình GPS realtime · Isar NoSQL offline-first · đồng bộ khi có mạng.",
        "Voice & AI: STT (speech_to_text) + TTS (flutter_tts) · AI Chat assistant tích hợp.",
        "CI/CD hoàn chỉnh: GitHub Actions + Fastlane + Codemagic + Shorebird OTA → tự động build AAB → Google Play.",
        "Mã nguồn: https://github.com/dattcq/me_tools_demo",
        "Tech Stack: Dart 3.8+, Flutter, GetX, BLoC, Riverpod, GetIt, Isar NoSQL, Google ML Kit OCR/Face Detection, NFC Kit, Platform Channels, Isolates, Github Actions, Fastlane, Codemagic",
      ],
    },
    {
      name: "CV Web Portfolio (Trang web bạn đang xem)",
      role: "Frontend Developer",
      period: "07/2026 - Hiện nay",
      details: [
        "Mô tả: Hệ thống CV điện tử cá nhân dạng SPA tốc độ cao, hỗ trợ xuất PDF và cập nhật dữ liệu thời gian thực từ Database mà không cần build lại ứng dụng.",
        "Thiết kế UI/UX: Áp dụng phong cách Glassmorphism, CSS Variables tự động chuyển đổi Dark/Light mode theo thiết lập hệ thống, tối ưu giao diện in ấn (Print Media).",
        "Hiệu năng & Kiến trúc: Xây dựng trên nền tảng Next.js (React) đảm bảo chuẩn SEO và tốc độ tải trang cực nhanh. Render dữ liệu động từ Firebase.",
        "Mã nguồn: https://github.com/dattcq/me-cv",
        "Tech Stack: Next.js, React, TypeScript, Vanilla CSS, Firebase Firestore",
      ],
    },
  ],
};
