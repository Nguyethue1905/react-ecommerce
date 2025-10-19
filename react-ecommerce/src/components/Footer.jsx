import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 space-y-2">
            <h3 className="text-lg font-bold text-gray-800">Wolf Fix</h3>
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
          </div>
          <div className="col-span-12 md:col-span-4 space-y-2">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
