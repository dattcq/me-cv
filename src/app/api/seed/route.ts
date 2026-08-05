import { NextResponse } from "next/server";
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID } from "@/constants/firebase";

export const dynamic = "force-static";

const cvData = {
  "personal_info": {
    "name": "TRƯƠNG CÔNG QUỐC ĐẠT",
    "title": "Flutter Developer",
    "phone": "0333 775 388",
    "email": "dattruong2596@gmail.com",
    "address": "Dương Văn Bé, phường Vĩnh Tuy, Hà Nội"
  },
  "education": [
    {
      "school": "Đại học Xây Dựng",
      "period": "2014 - 2019",
      "major": "Công nghệ phần mềm (Công Nghệ Thông Tin)"
    }
  ],
  "career_objective": {
    "summary": "Tôi là Flutter Developer với hơn 3 năm kinh nghiệm phát triển ứng dụng di động và hơn 2 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm. Tôi luôn hướng đến việc xây dựng những sản phẩm ổn định, tối ưu hiệu năng và dễ mở rộng, đồng thời không ngừng học hỏi, ứng dụng các công cụ AI để nâng cao hiệu quả phát triển phần mềm.",
    "goal": "Phát triển trở thành Full-stack Developer, từng bước mở rộng kiến thức từ Mobile sang Backend để có thể tham gia toàn diện vào quá trình xây dựng và phát triển sản phẩm."
  },
  "skills": {
    "Ngôn ngữ & Kiến trúc": "Dart, Flutter, Clean Architecture, Feature-driven Architecture, GetIt.",
    "State Management": "GetX, BLoC/Cubit, Riverpod 2.0+, Provider.",
    "Networking & Backend": "RESTful API với Dio Custom Interceptors, Token Refresh và Error Handling, hệ sinh thái Firebase gồm Auth, Cloud Messaging, Crashlytics, Firestore và Storage, Auth0.",
    "Native & Phần cứng": "Google Maps SDK, Geolocation, Camera, OCR Text Recognition, NFC Kit, ML Kit Face Detection, xác thực sinh trắc học TouchID/FaceID, InAppWebView, Local Notifications, Background Services, Platform Channels, Isolates.",
    "Cơ sở dữ liệu cục bộ": "Isar NoSQL, Secure Storage, SharedPreferences.",
    "Công cụ & Khác": "Shorebird Hot Code Push, Git, Figma, AI Coding Tools."
  },
  "experience": [
    {
      "company": "CÔNG TY CP CÔNG NGHỆ VI MÔ",
      "role": "Mobile Developer",
      "period": "03/2023 - Hiện nay",
      "description": "Chuẩn hóa cấu trúc project theo Feature-driven và GetX, tự thực hiện kiểm thử trên thiết bị thật để cover edge-cases trước khi bàn giao cho QA.",
      "projects": [
        {
          "name": "1. MyNextpay – CRM/ERP Nội bộ cho Sale & Telesale",
          "details": [
            "Quy mô: Ứng dụng quản lý công việc hàng ngày cho đội ngũ kinh doanh ~200 ~500 nhân sự NextPay toàn quốc.",
            "Chấm công & Định vị: Xây dựng luồng Check-in/Check-out hiện trường có độ chính xác cao. Tích hợp Google Maps SDK và Geolocator để thu thập tọa độ, vẽ lộ trình di chuyển và xác thực vị trí nhân sự thời gian thực.",
            "eKYC & Chứng từ: Tích hợp Camera quét tài liệu, đọc mã QR/Barcode và phát triển tính năng ký số điện tử trực tiếp trên màn hình, giúp tự động hóa luồng tạo hợp đồng và phụ lục.",
            "Nghiệp vụ cốt lõi: Phát triển trọn vẹn luồng tạo mới và phụ lục hợp đồng dịch vụ, tra cứu thông tin điểm chấp nhận thanh toán, tạo phiếu hỗ trợ kỹ thuật và điều chuyển thiết bị mPOS/Smart POS.",
            "Vận hành: Triển khai Shorebird Code Push đẩy các bản vá lỗi khẩn cấp trực tiếp xuống thiết bị người dùng mà không cần chờ duyệt qua App Store/Google Play.",
            "Tech Stack: Flutter, GetX, Provider, Dio, Google Maps SDK, Geolocator, Mobile Scanner, Signature, Firebase FCM/Crashlytics, Shorebird, Secure Storage."
          ]
        },
        {
          "name": "2. OriX – Nền tảng Tiếp thị & Phân phối cho Cộng tác viên",
          "details": [
            "Quy mô: Ứng dụng B2C và Affiliate phục vụ mạng lưới cộng tác viên kinh doanh thiết bị thanh toán (Tingbox, Smart POS).",
            "Xác thực: Xây dựng luồng đăng nhập nhanh bằng sinh trắc học vân tay/FaceID và xử lý mã hóa bảo mật token API.",
            "Nghiệp vụ Affiliate: Phát triển giao diện sơ đồ cây giới thiệu cộng tác viên đa cấp, bảng thống kê doanh số động và nhúng In-app WebView phục vụ luồng đặt hàng trực tuyến.",
            "Media: Tối ưu hóa hiệu năng tải và ghi ảnh marketing độ phân giải cao vào thư viện điện thoại, đồng thời chia sẻ nhanh sang các mạng xã hội.",
            "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird."
          ]
        },
        {
          "name": "3. Tingbox (trước đây là MPOS360) – Ứng dụng quản lý Merchant",
          "details": [
            "Mô tả: Ứng dụng quản lý dành cho các đối tác mPOS, giúp theo dõi giao dịch một cách hiệu quả và nhận thông báo giao dịch theo thời gian thực thông qua MQTT.",
            "Nhiệm vụ & Kỹ thuật: Hỗ trợ fix bugs, phát triển UI, thực hiện các task nhỏ khi dự án cần.",
            "Tech Stack: Flutter, GetX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase, Shorebird, MQTT."
          ]
        },
        {
          "name": "4. NextShop – Ứng dụng quản lý bán hàng",
          "details": [
            "Mô tả: Giải pháp quản lý bán hàng giúp các cửa hàng theo dõi hoạt động kinh doanh và quản lý hàng tồn kho hiệu quả trên thiết bị di động.",
            "Nhiệm vụ & Kỹ thuật: Hỗ trợ fix bugs, phát triển UI, thực hiện các task nhỏ khi dự án cần.",
            "Tech Stack: Flutter, Provider + MobX, ScreenUtil, Local Auth, InAppWebView, Dio, Firebase."
          ]
        }
      ]
    },
    {
      "company": "CÔNG TY CP TẬP ĐOÀN CHUYỂN ĐỔI SỐ NEXTPAY",
      "role": "Tester",
      "period": "12/2020 - 03/2023",
      "description": "Đảm bảo chất lượng phần mềm cho hệ sinh thái MyNextpay (Web & Mobile) trước khi chuyển hướng sang vị trí Developer.",
      "details": [
        "System Analysis & Test Design: Phân tích tài liệu BA, thiết kế và thực thi test cases cho các luồng nghiệp vụ cốt lõi và phức tạp của Sale/Telesale (quản lý hợp đồng, luồng thanh toán, check-in theo location).",
        "API & Cross-platform Testing: Kiểm thử tính đúng đắn của REST API và kiểm tra độ tương thích UI/UX trên đa nền tảng (Web, iOS, Android).",
        "Root-cause Analysis: Report, tái hiện bug và làm việc trực tiếp với Dev để phân tích nguyên nhân gốc rễ, đẩy nhanh quá trình fix lỗi.",
        "Chuyển đổi vai trò: Tận dụng quá trình test app để thấu hiểu sâu sắc business flow và kiến trúc ứng dụng. Chủ động tự học Flutter, ứng dụng kiến thức vào thực tế và được tin tưởng chuyển đổi nội bộ thành công sang vị trí Mobile Developer."
      ]
    }
  ],
  "personal_projects": [
    {
      "name": "MeTools - Khung Kiến Trúc Đa Tầng & Bộ Giải Pháp Nền Tảng Flutter",
      "role": "Mobile Developer + Tester",
      "period": "06/2026 - Hiện nay",
      "details": [
        "Mô tả: Khung kiến trúc phần mềm và bộ tiện ích cốt lõi chuẩn Enterprise được thiết kế để giải quyết các bài toán kỹ thuật phức tạp trong phát triển ứng dụng Flutter quy mô lớn.",
        "Kiến trúc Multi-State Sandbox: Phân lớp độc lập tầng domain và data. Thiết kế và triển khai song song 3 mô hình State Management gồm GetX, BLoC/Cubit và Riverpod 2.0+ cho từng sub-feature, đạt tỷ lệ tái sử dụng 100% logic nghiệp vụ và tầng giao tiếp dữ liệu.",
        "Hệ sinh thái eKYC chuyên sâu: Xây dựng trọn bộ luồng định danh điện tử gồm bóc tách thông tin giấy tờ tùy thân qua Camera OCR, đọc chip CCCD qua cảm biến NFC và kiểm tra thực thể sống chống giả mạo khuôn mặt Liveness Check.",
        "Tích hợp Native & Xử lý đa luồng: Xây dựng luồng giao tiếp hai chiều Platform Channels trên iOS/Android để kết nối thiết bị ngoại vi IoT. Tận dụng Dart Isolates xử lý các tác vụ tính toán nặng mà không làm nghẽn UI Thread.",
        "Bản đồ GIS & Đồng bộ Offline: Xử lý theo dõi lịch sử lộ trình GPS thời gian thực, tích hợp cơ sở dữ liệu cục bộ tốc độ cao Isar NoSQL hỗ trợ hoạt động offline và đồng bộ hóa khi có mạng.",
        "Chức năng mở rộng & Automation: Tự động khởi tạo và in ấn tài liệu PDF, tích hợp trợ lý ảo AI Chat và tự động hóa kiểm soát chất lượng code bằng script tự viết.",
        "Tech Stack: Dart 3.8+, Flutter, GetX, BLoC, Riverpod, GetIt, Isar NoSQL, Google ML Kit OCR/Face Detection, NFC Kit, Platform Channels, Isolates."
      ]
    },
    {
      "name": "CV Web Portfolio (Trang web bạn đang xem)",
      "role": "Frontend Developer",
      "period": "07/2026 - Hiện nay",
      "details": [
        "Mô tả: Hệ thống CV điện tử cá nhân dạng SPA tốc độ cao, hỗ trợ xuất PDF và cập nhật dữ liệu thời gian thực từ Database mà không cần build lại ứng dụng.",
        "Thiết kế UI/UX: Áp dụng phong cách Glassmorphism, CSS Variables tự động chuyển đổi Dark/Light mode theo thiết lập hệ thống, tối ưu giao diện in ấn (Print Media).",
        "Hiệu năng & Kiến trúc: Xây dựng trên nền tảng Next.js (React) đảm bảo chuẩn SEO và tốc độ tải trang cực nhanh. Render dữ liệu động từ Firebase.",
        "Mã nguồn: https://github.com/dattcq/me-cv",
        "Tech Stack: Next.js, React, TypeScript, Vanilla CSS, Firebase Firestore."
      ]
    }
  ]
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get('secret') !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Handle escaped newlines in private key
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error("Missing FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, or FIREBASE_PRIVATE_KEY in environment variables.");
    }

    if (!getApps().length) {
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        })
      });
    }

    const db = getFirestore();
    const docRef = db.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOCUMENT_ID);
    
    await docRef.set(cvData);
    
    return NextResponse.json({ success: true, message: "Data seeded successfully with Admin SDK!" });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Lỗi kết nối Admin SDK", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
