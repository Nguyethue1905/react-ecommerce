import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto px-4 container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Wolf Fix</h3>
            <p className="text-gray-600">
              Wolf Music là hệ thống phân phối nhạc cụ, âm thanh, ánh sáng, phòng thu với hệ thống showroom và hơn 70 đại lý khắp các tỉnh thành.
            </p>
            <ul className="space-y-2">
              <li className="text-gray-600"><FontAwesomeIcon icon={faEnvelope} size="lg" /> wolfmusic@gmail.com</li>
              <li className="text-gray-600"><FontAwesomeIcon icon={faLocationDot} size="lg" /> 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh</li>
              <li className="text-gray-600"><FontAwesomeIcon icon={faPhone} size="lg" /> 1900 6750</li>
            </ul>
            <h3 className="text-2xl">Kết nối với Wolf Fix</h3>
            <ul className="flex space-x-4">
              <li className="text-gray-600"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{ color: "#1055C9" }} /></li>
              <li className="text-gray-600"><FontAwesomeIcon icon={faTwitter} size="2xl" style={{ color: "#1055C9" }} /></li>
              <li className="text-gray-600"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#DC143C" }} /></li>
            </ul>

            {/* <h3 className="text-2xl">Phương thức thanh toán</h3>
            <ul className="flex space-x-4">
              <li><img src="payment/vnpay-logo.jpg" width={70} height={44} alt="" /></li>
              <li><img src="payment/zalopay-logo.jpg" width={70} height={44} alt="" /></li>
              <li><img src="payment/napas-logo.jpg" width={70} height={44} alt="" /></li>
              <li><img src="payment/visa-logo.png" width={70} height={44} alt="" /></li>
              <li><img src="payment/google-pay-logo.png" width={70} height={44} alt="" /></li>
              <li><img src="payment/apple-pay-logo.png" width={70} height={44} alt="" /></li>
            </ul> */}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Chăm sóc khách hàng</h3>

            <ul className="space-y-2">
              <li className="text-gray-600"><a href="">Hệ thống cửa hàng</a></li>
              <li className="text-gray-600"><a href="">Kiểm tra đơn hàng</a></li>
              <li className="text-gray-600"><a href="">Hướng dẫn thanh toán</a></li>
              <li className="text-gray-600"><a href="">Các hình thức mua hàng</a></li>
              <li className="text-gray-600"><a href="">Hướng dẫn mua hàng</a></li>
              <li className="text-gray-600"><a href="">Giới thiệu Wolf Fix</a></li>
              <li className="text-gray-600"><a href="">Liên hệ với chúng tôi</a></li>
            </ul>

          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Chính sách bán hàng</h3>

            <ul className="space-y-2">
              <li className="text-gray-600"><a href="">Chính sách và quy định chung</a></li>
              <li className="text-gray-600"><a href="">Chính sách bảo hành sản phẩm</a></li>
              <li className="text-gray-600"><a href="">Chính sách bảo mật thông tin</a></li>
              <li className="text-gray-600"><a href="">Chính sách vận chuyển</a></li>
              <li className="text-gray-600"><a href="">Quy trình giao hàng</a></li>
              <li className="text-gray-600"><a href="">Chính sách đổi trả</a></li>
            </ul>
            <a href="" className="flex items-center text-gray-600 hover:text-red-500">
              <div>
                <img src="payment/zalo-buy-qrcode.jpg" width={120} height={120} alt="" />
              </div>
              <div>
                <p className="font-bold">Zalo Mini Apps</p>
                <p>Quét mã QR để mua hàng nhanh chóng</p>
              </div>
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Dịch vụ và thông tin khác</h3>

            <ul className="space-y-2">
              <li className="text-gray-600"><a href="">Ưu đãi thanh toán</a></li>
              <li className="text-gray-600"><a href="">Khách hàng doanh nghiệp</a></li>
              <li className="text-gray-600"><a href="">Thông tin tuyển dụng</a></li>
              <li className="text-gray-600"><a href="">Chính sách Bảo hành</a></li>
              <li className="text-gray-600"><a href="">Trả góp qua thẻ</a></li>
              <li className="text-gray-600"><a href="">Trả góp qua công ty tài chính</a></li>
              <li className="text-gray-600"><a href="">Hóa đơn GTGT điện tử</a></li>
              <li className="text-gray-600"><a href="">Đăng ký làm đại lý</a></li>
            </ul>

          </div>
        </div>
      </div>
    </footer>
  )
}
