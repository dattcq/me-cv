import { CVData } from "@/types/cv";

export const initialCVData: CVData = {
  personal_info: {
    name: "TRƯƠNG CÔNG QUỐC ĐẠT",
    title: "Senior Mobile Developer (Flutter / AI-Native)",
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
      "Senior Mobile Developer với 3+ năm kinh nghiệm Flutter chuyên sâu và nền tảng 2+ năm QA/Tester. Tiên phong áp dụng phương pháp AI-Native Engineering (Master Plan & Phased Context Prompting) giúp tăng tốc độ bàn giao sản phẩm gấp 3-4 lần mà vẫn đảm bảo 100% chuẩn Clean Architecture và CI Quality Gate. Thành thạo xử lý các bài toán Native/Hardware phức tạp (eKYC, NFC chip CCCD, Biometrics, Dart Isolates, Shorebird OTA) trên hệ thống phục vụ hàng trăm người dùng doanh nghiệp.",
    goal:
      "Mục tiêu dài hạn: Trở thành Full-stack / Mobile Solution Architect. Mục tiêu ngắn hạn: Tối ưu hóa hiệu năng hệ thống di động quy mô lớn, chuẩn hóa quy trình phát triển kết hợp AI cho doanh nghiệp và mở rộng năng lực Backend (RESTful API, Microservices, Cloud Server).",
  },
  skills: {
    "Phương pháp & Kiến trúc": "AI-Native Engineering, Clean Architecture, Feature-Driven, GetIt, SOLID",
    "State Management": "Flutter Riverpod 2.0+, BLoC/Cubit, GetX, Provider",
    "eKYC & Bảo mật": "Camera OCR, NFC Chip Reader, Liveness Check, Ký số điện tử, Local Auth, Secure Storage, Crypto",
    "Native & Tích hợp phần cứng": "Platform Channels, Dart Isolates, NFC Kit, Google ML Kit, Google Maps SDK, Geolocator, Biometric Auth, MQTT",
    "Networking & Backend": "Dio 5.x, Firebase FCM, Firebase Firestore, RESTful API",
    "Cơ sở dữ liệu cục bộ": "Isar NoSQL, Secure Storage, SharedPreferences",
    "CI/CD & DevOps": "GitHub Actions, Fastlane, Codemagic, Shorebird OTA, CI Quality Gates",
    "Công cụ & AI Tools": "Antigravity 2.0, Cursor, Claude Code, Figma, Postman, Git",
  },
  experience: [
    {
      company: "CÔNG TY CP CÔNG NGHỆ VI MÔ",
      role: "Mobile Developer",
      period: "03/2023 - Hiện nay",
      description:
        "Chịu trách nhiệm kiến trúc và phát triển ứng dụng di động theo Feature-Driven Clean Architecture. Áp dụng tư duy QA tự kiểm thử trên thiết bị thật giúp giảm 80% lỗi ở các luồng nghiệp vụ chính trước khi bàn giao cho đội testing.",
      projects: [
        {
          name: "1. MyNextpay – CRM/ERP Nội bộ Doanh nghiệp",
          details: [
            "Quy mô: Phục vụ 300 - 500 nhân sự kinh doanh và telesale hoạt động tác nghiệp hàng ngày trên toàn quốc.",
            "GPS Field Check-in: Tích hợp Google Maps SDK, Geolocator và đồng bộ NTP time xác thực chuẩn xác vị trí hiện trường, loại bỏ hoàn toàn gian lận chấm công.",
            "eKYC & Ký số điện tử: Số hóa quy trình tạo hợp đồng qua Camera OCR, đọc mã Barcode/QR và ký số trực tiếp trên màn hình, giúp cắt giảm 50% thời gian xử lý hồ sơ thủ công.",
            "Nghiệp vụ cốt lõi: Phát triển trọn vẹn luồng tạo hợp đồng dịch vụ, phiếu hỗ trợ kỹ thuật, điều chuyển thiết bị Smart POS và tra cứu điểm chấp nhận thanh toán.",
            "Shorebird OTA Hotfix: Triển khai Shorebird Code Push, rút ngắn thời gian phát hành bản vá khẩn cấp từ 2-3 ngày xuống còn 10 - 15 phút, đảm bảo hệ thống vận hành liên tục.",
            "Tech Stack: Shorebird OTA, Google Maps SDK, GetX, Dio, Firebase FCM",
          ],
        },
        {
          name: "2. OriX – Nền tảng Tiếp thị & Phân phối (Affiliate & B2C)",
          details: [
            "Quy mô: Sản phẩm mới ra mắt đạt hơn 100+ lượt tải, phục vụ mạng lưới cộng tác viên phân phối thiết bị thanh toán (Tingbox, Smart POS).",
            "Bảo mật & Sinh trắc học: Tích hợp FaceID/TouchID kết hợp Crypto mã hóa token API, bảo mật toàn diện phiên đăng nhập và dữ liệu giao dịch.",
            "Affiliate Engine: Xây dựng sơ đồ cây cộng tác viên đa cấp, dashboard thống kê doanh số động và tích hợp InAppWebView cho luồng đặt hàng trực tuyến.",
            "Xử lý Media: Tối ưu tải và lưu ảnh marketing độ phân giải cao vào thư viện thiết bị, chia sẻ đa nền tảng mạng xã hội qua share_plus.",
            "Tech Stack: Shorebird OTA, Biometric Auth, Crypto Security, GetX, Dio, Firebase",
          ],
        },
        {
          name: "3. Tingbox & NextShop – Bảo trì & Phát triển tính năng phụ",
          details: [
            "Mô tả: Hỗ trợ bảo trì UI, fix bugs và phát triển tính năng phụ định kỳ cho 2 sản phẩm thuộc hệ sinh thái thanh toán.",
            "Tingbox (Quản lý Merchant): Đồng bộ và hiển thị thông báo giao dịch theo thời gian thực qua giao thức MQTT.",
            "NextShop (Quản lý bán lẻ): Cải tiến giao diện và sửa lỗi cho giải pháp theo dõi bán hàng & quản lý kho trên nền Provider + MobX.",
            "Tech Stack: MQTT Realtime, MobX, Provider, GetX, Dio",
          ],
        },
      ],
    },
    {
      company: "CÔNG TY CP TẬP ĐOÀN CHUYỂN ĐỔI SỐ NEXTPAY",
      role: "Software QA / Tester",
      period: "12/2020 - 03/2023",
      description:
        "Đảm bảo chất lượng phần mềm toàn diện cho hệ sinh thái MyNextpay (Web & Mobile) với quy trình kiểm thử nghiêm ngặt.",
      details: [
        "Review BA/SRS & Thiết kế Test Cases: Phát hiện mâu thuẫn nghiệp vụ từ sớm; xây dựng ma trận test cases bao phủ các luồng phức tạp (hợp đồng, thanh toán mPOS, GPS check-in) và edge-cases.",
        "API Testing & Đa nền tảng: Kiểm thử RESTful API bằng Postman (response payload, status code, stress test cơ bản); xác thực tính đồng nhất giao diện và logic trên Web, iOS và Android.",
        "Quản lý vòng đời lỗi: Thực hiện Regression Testing định kỳ trước mỗi đợt release, theo dõi và phân tích nguyên nhân lỗi trên Redmine, phối hợp chặt chẽ với Dev để đẩy nhanh tiến độ fix bug.",
        "Chuyển dịch sang Mobile Dev: Khai thác chiều sâu am hiểu nghiệp vụ và kiến trúc hệ thống để tự đào tạo Flutter, chuyển đổi nội bộ thành công sang vị trí Mobile Developer.",
      ],
    },
  ],
  personal_projects: [
    {
      name: "HT Agri (Pro Fertilizer) - Quản Lý Bán Hàng Phân Bón & Vật Tư Nông Nghiệp",
      role: "Mobile Architect & Developer",
      period: "09/2026 - Hiện nay",
      details: [
        "Mô tả: Hệ thống di động Enterprise quản lý chuỗi cung ứng vật tư nông nghiệp, kết nối chủ kho, nhân viên kinh doanh và bà con nông dân. Phát triển với phương pháp AI-Native Engineering.",
        "Phương pháp AI-Native: Ứng dụng quy trình Master Plan & Phased Context Prompting, phân tách từng phase độc lập để chống context-drift; tăng tốc độ bàn giao lên gấp 3-4 lần (từ 3-4 ngày/tính năng xuống còn 4-6 giờ).",
        "Kiến trúc Clean Architecture: Phân tách độc lập 3 tầng Domain - Data - Presentation theo từng feature; quản lý state hiệu năng cao với Riverpod 2.x kết hợp GoRouter 14.x ShellRoute đa tab.",
        "Phân quyền đa vai trò (RBAC): Giao diện thích ứng (Adaptive UI) cho 3 nhóm: Quản trị viên (tồn kho, cảnh báo hết hàng), Nhân viên bán hàng (KPI doanh số, lên đơn), Nông dân (đặt hàng, cẩm nang bón phân).",
        "Xác thực & Bảo mật: Luồng xác thực SĐT Việt Nam + OTP SMS, đăng nhập FaceID/TouchID (local_auth), mã hóa token với flutter_secure_storage và Crypto.",
        "CI Quality Gate & Tự động hóa: Đạt 16/16 Unit Tests tự động, 0 cảnh báo lint; tích hợp script PowerShell CI tự động kiểm tra chất lượng code trước khi bàn giao.",
        "Mã nguồn: https://github.com/dattcq/pro-fertilizer",
        "Tech Stack: Riverpod 2.x, GoRouter, Dio, Firebase Messaging (FCM), Biometric Auth, Secure Storage & Crypto",
      ],
    },
    {
      name: "MeTools - Khung Kiến Trúc Đa Tầng & Bộ Giải Pháp Nền Tảng Flutter",
      role: "Mobile Architect & Developer",
      period: "06/2026 - Hiện nay",
      details: [
        "Mô tả: Bộ khung kiến trúc và giải pháp kỹ thuật chuyên sâu chuẩn Enterprise cho ứng dụng Flutter quy mô lớn, phát triển bằng quy trình AI-Native Spec-Driven.",
        "Multi-State Sandbox: Triển khai song song GetX + BLoC/Cubit + Riverpod 2.0+ trên cùng một tầng domain/data độc lập, tái sử dụng 100% business logic.",
        "eKYC Full-stack Pipeline: Tích hợp Camera OCR bóc tách giấy tờ CCCD, đọc chip NFC và kiểm tra thực thể sống Liveness Check chống giả mạo khuôn mặt.",
        "Platform Channels & Isolates: Giao tiếp 2 chiều native iOS/Android; xử lý các tác vụ tính toán nặng và giải mã qua Dart Isolates không block UI Thread.",
        "GIS & Offline-First: Định vị GPS thời gian thực, lưu trữ cục bộ siêu tốc với Isar NoSQL và tự động đồng bộ khi có mạng.",
        "CI/CD & OTA Release: Tự động hóa hoàn toàn với GitHub Actions, Fastlane, Codemagic và Shorebird OTA, build xuất thẳng AAB lên Google Play.",
        "Mã nguồn: https://github.com/dattcq/me_tools_demo",
        "Tech Stack: NFC Kit (CCCD), Google ML Kit, Platform Channels, Dart Isolates, Isar NoSQL, Shorebird OTA, Fastlane CI/CD, Riverpod, BLoC, GetX",
      ],
    },
    {
      name: "CV Web Portfolio (Hệ Thống Portfolio & Resume Điện Tử)",
      role: "Frontend Developer",
      period: "07/2026 - Hiện nay",
      details: [
        "Mô tả: Hệ thống CV điện tử cá nhân dạng SPA tốc độ cao, hiển thị tức thì (140ms), hỗ trợ xuất PDF và chuyển đổi song ngữ mượt mà.",
        "Thiết kế UI/UX & Responsive: Phong cách Glassmorphism hiện đại, hỗ trợ Dark/Light mode tự động, tối ưu giao diện in ấn (@media print) chuẩn tài liệu A4.",
        "Kiến trúc & Tối ưu hiệu năng: Xây dựng trên Next.js 16 (App Router), React 19, TypeScript; áp dụng cơ chế Stale-While-Revalidate với Firebase Firestore.",
        "Mã nguồn: https://github.com/dattcq/me-cv",
        "Tech Stack: Next.js 16 (App Router), TypeScript, Firebase Firestore",
      ],
    },
  ],
};
