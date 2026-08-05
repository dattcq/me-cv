import { CVData } from "@/types/cv";
import { Language } from "@/constants/translations";

export function getTranslatedCVData(data: CVData, lang: Language): CVData {
  if (lang === "vi") {
    return {
      ...data,
      career_objective: {
        summary:
          "Tôi là Flutter Developer với hơn 3 năm kinh nghiệm phát triển ứng dụng di động và hơn 2 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm. Tôi luôn hướng đến việc xây dựng những sản phẩm ổn định, tối ưu hiệu năng và dễ mở rộng, đồng thời không ngừng học hỏi, ứng dụng các công cụ AI để nâng cao hiệu quả phát triển phần mềm.",
        goal:
          "Phát triển trở thành Full-stack Developer, từng bước mở rộng kiến thức từ Mobile sang Backend để có thể tham gia toàn diện vào quá trình xây dựng và phát triển sản phẩm.",
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
                "Quy mô: Ứng dụng quản lý công việc hàng ngày cho đội ngũ kinh doanh ~200 ~500 nhân sự NextPay toàn quốc.",
                "Chấm công & Định vị: Xây dựng luồng Check-in/Check-out hiện trường có độ chính xác cao. Tích hợp Google Maps SDK và Geolocator để thu thập tọa độ, vẽ lộ trình di chuyển và xác thực vị trí nhân sự thời gian thực.",
                "eKYC & Chứng từ: Tích hợp Camera quét tài liệu, đọc mã QR/Barcode và phát triển tính năng ký số điện tử trực tiếp trên màn hình, giúp tự động hóa luồng tạo hợp đồng và phụ lục.",
                "Nghiệp vụ cốt lõi: Phát triển trọn vẹn luồng tạo mới và phụ lục hợp đồng dịch vụ, tra cứu thông tin điểm chấp nhận thanh toán, tạo phiếu hỗ trợ kỹ thuật và điều chuyển thiết bị mPOS/Smart POS.",
                "Vận hành: Triển khai Shorebird Code Push đẩy các bản vá lỗi khẩn cấp trực tiếp xuống thiết bị người dùng mà không cần chờ duyệt qua App Store/Google Play.",
                "Tech Stack: Flutter, GetX, Provider, Dio, Google Maps SDK, Geolocator, Mobile Scanner, Signature, Firebase FCM/Crashlytics, Shorebird, Secure Storage.",
              ],
            },
            {
              name: "2. OriX – Nền tảng Tiếp thị & Phân phối cho Cộng tác viên",
              details: [
                "Quy mô: Ứng dụng B2C và Affiliate phục vụ mạng lưới cộng tác viên kinh doanh thiết bị thanh toán (Tingbox, Smart POS).",
                "Xác thực: Xây dựng luồng đăng nhập nhanh bằng sinh trắc học vân tay/FaceID và xử lý mã hóa bảo mật token API.",
                "Nghiệp vụ Affiliate: Phát triển giao diện sơ đồ cây giới thiệu cộng tác viên đa cấp, bảng thống kê doanh số động và nhúng In-app WebView phục vụ luồng đặt hàng trực tuyến.",
                "Media: Tối ưu hóa hiệu năng tải và ghi ảnh marketing độ phân giải cao vào thư viện điện thoại, đồng thời chia sẻ nhanh sang các mạng xã hội.",
                "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird.",
              ],
            },
            {
              name: "3. Tingbox (trước đây là MPOS360) – Ứng dụng quản lý Merchant",
              details: [
                "Mô tả: Ứng dụng quản lý dành cho các đối tác mPOS, giúp theo dõi giao dịch một cách hiệu quả và nhận thông báo giao dịch theo thời gian thực thông qua MQTT.",
                "Nhiệm vụ & Kỹ thuật: Hỗ trợ fix bugs, phát triển UI, thực hiện các task nhỏ khi dự án cần.",
                "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird, MQTT.",
              ],
            },
            {
              name: "4. NextShop – Ứng dụng quản lý bán hàng",
              details: [
                "Mô tả: Giải pháp quản lý bán hàng giúp các cửa hàng theo dõi hoạt động kinh doanh và quản lý hàng tồn kho hiệu quả trên thiết bị di động.",
                "Nhiệm vụ & Kỹ thuật: Hỗ trợ fix bugs, phát triển UI, thực hiện các task nhỏ khi dự án cần.",
                "Tech Stack: Flutter, Provider + MobX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase.",
              ],
            },
          ],
        },
        {
          company: "CÔNG TY CP TẬP ĐOÀN CHUYỂN ĐỔI SỐ NEXTPAY",
          role: "Tester",
          period: "12/2020 - 03/2023",
          description:
            "Đảm bảo chất lượng phần mềm cho hệ sinh thái MyNextpay (Web & Mobile) trước khi chuyển hướng sang vị trí Developer.",
          details: [
            "System Analysis & Test Design: Phân tích tài liệu BA, thiết kế và thực thi test cases cho các luồng nghiệp vụ cốt lõi và phức tạp của Sale/Telesale (quản lý hợp đồng, luồng thanh toán, check-in theo location).",
            "API & Cross-platform Testing: Kiểm thử tính đúng đắn của REST API và kiểm tra độ tương thích UI/UX trên đa nền tảng (Web, iOS, Android).",
            "Root-cause Analysis: Report, tái hiện bug và làm việc trực tiếp với Dev để phân tích nguyên nhân gốc rễ, đẩy nhanh quá trình fix lỗi.",
            "Chuyển đổi vai trò: Tận dụng quá trình test app để thấu hiểu sâu sắc business flow và kiến trúc ứng dụng. Chủ động tự học Flutter, ứng dụng kiến thức vào thực tế và được tin tưởng chuyển đổi nội bộ thành công sang vị trí Mobile Developer.",
          ],
        },
      ],
    };
  }

  return {
    personal_info: {
      ...data.personal_info,
      title: "Flutter Mobile Developer",
      address: "Duong Van Be, Vinh Tuy Ward, Hanoi, Vietnam",
    },
    career_objective: {
      summary:
        "I am a Flutter Developer with over 3 years of experience in mobile app development and over 2 years of experience in software testing. I always aim to build stable, performance-optimized, and scalable products, while continuously learning and applying AI tools to enhance software development efficiency.",
      goal:
        "Develop into a Full-stack Developer, step by step expanding knowledge from Mobile to Backend to fully participate in the product end-to-end development lifecycle.",
    },
    skills: {
      "Languages & Architecture": "Dart, Flutter, Clean Architecture, Feature-driven Architecture, GetIt.",
      "State Management": "GetX, BLoC/Cubit, Riverpod 2.0+, Provider.",
      "Networking & Backend": "RESTful API with Dio Custom Interceptors, Token Refresh & Error Handling, Firebase Ecosystem (Auth, Cloud Messaging, Crashlytics, Firestore, Storage), Auth0.",
      "Native & Hardware": "Google Maps SDK, Geolocation, Camera, OCR Text Recognition, NFC Kit, ML Kit Face Detection, Text-to-Speech (flutter_tts), Speech-to-Text (speech_to_text), TouchID/FaceID Biometrics, InAppWebView, Local Notifications, Background Services, Platform Channels, Isolates.",
      "Local Database": "Isar NoSQL, Secure Storage, SharedPreferences.",
      "Tools & Others": "GitHub Actions (CI/CD), Shorebird Hot Code Push, Git, Figma, AI Coding Tools.",
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
              "Attendance & Geolocation: Built high-accuracy field Check-in/Check-out flows. Integrated Google Maps SDK & Geolocator for real-time coordinate tracking, route drawing, and location verification.",
              "eKYC & Documents: Integrated camera document scanning, QR/Barcode reading, and digital signature features directly on-screen to automate contract and addendum workflows.",
              "Core Business Logic: Developed complete contract creation, service addenda, payment acceptance point lookups, technical support ticketing, and mPOS/Smart POS device transfers.",
              "Operations: Deployed Shorebird Code Push to deliver critical hotfixes directly to user devices without waiting for App Store/Google Play approval.",
              "Tech Stack: Flutter, GetX, Provider, Dio, Google Maps SDK, Geolocator, Mobile Scanner, Signature, Firebase FCM/Crashlytics, Shorebird, Secure Storage.",
            ],
          },
          {
            name: "2. OriX – Affiliate Marketing & Distribution Platform",
            details: [
              "Scale: B2C & Affiliate app serving a network of sales partners selling payment hardware (Tingbox, Smart POS).",
              "Authentication: Built biometric login (Fingerprint/FaceID) and API token security encryption.",
              "Affiliate Operations: Developed multi-level referrer tree diagrams, dynamic sales analytics dashboards, and embedded In-app WebViews for online ordering.",
              "Media: Optimized high-resolution marketing image loading and saving to device gallery, with instant social media sharing.",
              "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird.",
            ],
          },
          {
            name: "3. Tingbox (formerly MPOS360) – Merchant Management App",
            details: [
              "Description: Merchant management application for mPOS partners, enabling efficient transaction tracking and real-time transaction notifications via MQTT.",
              "Responsibilities & Engineering: Assisted in bug fixes, UI development, and handling minor tasks as required by the project.",
              "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird, MQTT.",
            ],
          },
          {
            name: "4. NextShop – Sales Management App",
            details: [
              "Description: Sales management solution empowering retail stores to monitor business operations and manage inventory effectively on mobile devices.",
              "Responsibilities & Engineering: Assisted in bug fixes, UI development, and handling minor tasks as required by the project.",
              "Tech Stack: Flutter, Provider + MobX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase.",
            ],
          },
        ],
      },
      {
        company: "NEXTPAY DIGITAL TRANSFORMATION GROUP",
        role: "Software QA / Tester",
        period: "12/2020 - 03/2023",
        description:
          "Ensured software quality for the MyNextpay ecosystem (Web & Mobile) before transitioning internally to Mobile Developer.",
        details: [
          "System Analysis & Test Design: Analyzed BA specifications, designed and executed test cases for core complex sales/telesale business flows (contracts, payments, location check-ins).",
          "API & Cross-platform Testing: Verified REST API accuracy and cross-platform UI/UX consistency across Web, iOS, and Android.",
          "Root-cause Analysis: Reported, reproduced bugs, and collaborated directly with developers to analyze root causes and accelerate fix cycles.",
          "Career Transition: Leveraged testing experience to gain deep understanding of business flows and system architecture. Self-taught Flutter, applied knowledge in production, and successfully achieved internal transition to Mobile Developer.",
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
          "Multi-State Sandbox Architecture: Decoupled domain and data layers. Designed and implemented 3 State Management models (GetX, BLoC/Cubit, Riverpod 2.0+) in parallel for sub-features, achieving 100% logic and data layer reuse.",
          "eKYC Ecosystem: Built complete identity verification workflows including ID card OCR extraction, NFC chip reading, and Liveness Check anti-spoofing.",
          "Voice & Speech Integration: Implemented Speech-to-Text (speech_to_text) and Text-to-Speech (flutter_tts) capabilities to provide seamless, hands-free voice interactions.",
          "Native Integration & Multi-threading: Built bi-directional Platform Channels on iOS/Android for IoT peripherals. Leveraged Dart Isolates for heavy compute tasks without blocking UI Thread.",
          "GIS Maps & Offline Sync: Handled real-time GPS route tracking, integrated high-speed Isar NoSQL local database for offline support and auto-sync.",
          "Automated CI/CD Pipeline: Configured and executed continuous integration & delivery using GitHub Actions for static analysis, unit testing, and multi-flavor builds. Streamlined deployment to Google Play Store and OTA hotpatching integrated with Shorebird Code Push.",
          "Extensions & Automation: Automated PDF document generation, integrated AI Chat assistant, and automated code quality scripts.",
          "Tech Stack: Dart 3.8+, Flutter, GetX, BLoC, Riverpod, flutter_tts, speech_to_text, GitHub Actions, Shorebird, GetIt, Isar NoSQL, Google ML Kit OCR/Face Detection, NFC Kit, Platform Channels, Isolates.",
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
          "Tech Stack: Next.js, React, TypeScript, Vanilla CSS, Firebase Firestore.",
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
