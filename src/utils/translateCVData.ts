import { CVData } from "@/types/cv";
import { Language } from "@/constants/translations";

export function getTranslatedCVData(data: CVData, lang: Language): CVData {
  if (lang === "vi") {
    return {
      ...data,
      personal_info: {
        ...data.personal_info,
        name: "TRƯƠNG CÔNG QUỐC ĐẠT",
        title: "Flutter Developer",
        address: "Dương Văn Bé, phường Vĩnh Tuy, Hà Nội",
      },
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
      education: [
        {
          school: "Đại học Xây Dựng",
          period: "2014 - 2019",
          major: "Công Nghệ Thông Tin - Chuyên ngành: Công nghệ phần mềm",
        },
      ],
    };
  }

  return {
    personal_info: {
      ...data.personal_info,
      name: "TRUONG CONG QUOC DAT",
      title: "Flutter Developer",
      address: "Duong Van Be, Vinh Tuy Ward, Hanoi, Vietnam",
    },
    career_objective: {
      summary:
        "Mobile Developer with 3+ years of Flutter experience and 2+ years of QA/Testing background — a combination that allows me to build robust features while proactively controlling quality early on. I have hands-on experience in medium to large-scale enterprise projects, from multi-tier architecture design to deep hardware integrations and production CI/CD deployments.",
      goal:
        "My long-term goal is to become a Full-stack Developer. In the short term, I focus on expanding Mobile engineering capabilities (iOS/Android performance optimization and scalable architecture), then broadening into Backend engineering with RESTful API, Database, and Server Deployment.",
    },
    skills: {
      "Languages & Architecture": "Dart 3.8+, Clean Architecture, Feature-driven Architecture, GetIt (DI)",
      "State Management": "BLoC/Cubit, Riverpod 2.0+, GetX, Provider",
      "Native & Hardware": "Platform Channels (iOS/Android), Dart Isolates, NFC Kit (ID card chip reader), Google ML Kit (OCR, Face Detection/Liveness), Google Maps SDK, Geolocator, Biometric Auth (FaceID/TouchID), MQTT",
      "eKYC Pipeline": "Camera OCR document extraction, NFC ID chip reader, Liveness Check anti-spoofing, Digital Signature",
      "Networking & Backend": "Dio (Custom Interceptors, Token Refresh, Error Handling), Firebase (FCM, Crashlytics, Firestore, Storage), Auth0, RESTful API",
      "Local Database": "Isar NoSQL, Secure Storage, SharedPreferences",
      "CI/CD & Release": "GitHub Actions, Fastlane, Codemagic, Shorebird OTA Code Push",
      "Tools & Others": "Figma, AI Coding Tools (Cursor, Antigravity)",
    },
    experience: [
      {
        company: "VI MO TECHNOLOGY JOINT STOCK COMPANY",
        role: "Mobile Developer",
        period: "03/2023 - Present",
        description:
          "Standardized project architecture into Feature-driven & GetX models, conducted rigorous manual & edge-case testing on real devices prior to QA handover.",
        projects: [
          {
            name: "1. MyNextpay – Internal CRM/ERP for Sales & Telesales",
            details: [
              "Scale: Daily operations management app serving ~200-500 NextPay sales & business personnel nationwide.",
              "Field GPS Check-in/Check-out: Integrated Google Maps SDK, Geolocator, and NTP time sync to ensure location accuracy.",
              "eKYC & Document Workflows: Integrated camera document scanning, QR/Barcode reading, and digital signatures directly on-screen to automate contract creation.",
              "Core Business Logic: Developed full service contracts, technical support ticketing, mPOS/Smart POS device transfers, and merchant lookup.",
              "Production Operations: Deployed Shorebird Code Push to deliver instant hotfixes directly to devices without waiting for App Store/Google Play reviews.",
              "Tech Stack: Flutter, GetX, Dio, Google Maps SDK, Mobile Scanner, Signature, Firebase, Shorebird",
            ],
          },
          {
            name: "2. OriX – Affiliate Marketing & Distribution Platform",
            details: [
              "Scale: B2C & Affiliate platform serving sales partner networks for payment hardware (Tingbox, Smart POS).",
              "Biometric Auth: Built FaceID/TouchID authentication combined with Crypto encryption for API token protection.",
              "Affiliate Engine: Developed multi-level referral trees, dynamic revenue analytics, and embedded InAppWebView for online ordering.",
              "Media Assets: Handled high-res marketing image download, saving to device library, and social sharing via share_plus & image_gallery_saver.",
              "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird",
            ],
          },
          {
            name: "3. Tingbox (formerly MPOS360) – Merchant Management App",
            details: [
              "Description: Merchant management app for mPOS partners to track transactions efficiently with real-time MQTT notifications.",
              "Contributions: Supported bug fixes, UI development, and feature tasks.",
              "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird, MQTT",
            ],
          },
          {
            name: "4. NextShop – Sales Management App",
            details: [
              "Description: Retail sales management solution empowering merchants to monitor business operations and inventory on mobile devices.",
              "Contributions: Supported bug fixes, UI development, and feature tasks.",
              "Tech Stack: Flutter, Provider + MobX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase",
            ],
          },
        ],
      },
      {
        company: "NEXTPAY DIGITAL TRANSFORMATION GROUP",
        role: "Software QA / Tester",
        period: "12/2020 - 03/2023",
        description:
          "Ensured software quality for the MyNextpay ecosystem (Web & Mobile) serving complex internal sales/telesale business processes.",
        details: [
          "Reviewed BA/SRS documentation early to identify business contradictions, then designed comprehensive test cases for contracts, payments, and location check-ins.",
          "Tested REST APIs via Postman, validating response data, status codes, and error handling. Verified cross-platform UI/UX consistency across Web, iOS, and Android.",
          "Executed Regression Testing before releases, managed test cases via Excel, tracked bug lifecycles via Redmine, and collaborated directly with Devs to analyze root causes.",
          "Leveraged testing experience to deeply master business flows and system architecture. Self-taught Flutter and successfully achieved an internal transition to Mobile Developer.",
        ],
      },
    ],
    personal_projects: [
      {
        name: "MeTools - Multi-Tiered Architecture & Flutter Platform Solutions",
        role: "Mobile Developer + Tester",
        period: "06/2026 - Present",
        details: [
          "Description: Enterprise-grade software framework and core utility suite designed to solve complex technical challenges in large-scale Flutter applications.",
          "Multi-State Sandbox: Decoupled domain/data layers, implementing GetX + BLoC/Cubit + Riverpod 2.0+ in parallel with 100% business logic reuse.",
          "eKYC Full-stack: Camera OCR document extraction, NFC ID chip reader, and Liveness Check anti-spoofing.",
          "Platform Channels + Isolates: Bi-directional iOS/Android communication with IoT peripherals; heavy tasks processed off-UI-thread via Dart Isolates.",
          "GIS & Offline Sync: Real-time GPS route tracking with high-speed Isar NoSQL offline-first local storage & auto-sync.",
          "Voice & AI: Speech-to-Text (speech_to_text) + Text-to-Speech (flutter_tts) with integrated AI Chat assistant.",
          "Complete CI/CD: Automated GitHub Actions + Fastlane + Codemagic + Shorebird OTA → direct AAB deployment to Google Play.",
          "Source Code: https://github.com/dattcq/me_tools_demo",
          "Tech Stack: Dart 3.8+, Flutter, GetX, BLoC, Riverpod, GetIt, Isar NoSQL, Google ML Kit OCR/Face Detection, NFC Kit, Platform Channels, Isolates, Github Actions, Fastlane, Codemagic",
        ],
      },
      {
        name: "CV Web Portfolio (The site you are viewing)",
        role: "Frontend Developer",
        period: "07/2026 - Present",
        details: [
          "Description: High-speed Single Page Application (SPA) personal CV system supporting real-time database updates and PDF exports without rebuilding.",
          "UI/UX Design: Applied Glassmorphism aesthetics, system Dark/Light mode switching, and Print Media optimization.",
          "Performance & Architecture: Built on Next.js (React) ensuring SEO compliance and lightning-fast page load times. Rendered dynamically from Firebase.",
          "Source Code: https://github.com/dattcq/me-cv",
          "Tech Stack: Next.js, React, TypeScript, Vanilla CSS, Firebase Firestore",
        ],
      },
    ],
    education: [
      {
        school: "Hanoi University of Civil Engineering (HUCE)",
        period: "2014 - 2019",
        major: "Software Engineering (Computer Science & IT)",
      },
    ],
  };
}
