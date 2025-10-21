import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";


export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white">
      <div className="mx-auto px-4 container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Wolf Fix</h3>
            <p className="text-gray-600">
              {t("footer.describe")}
            </p>
            <ul className="space-y-2">
              <li className="text-gray-600"><FontAwesomeIcon icon={faEnvelope} size="lg" /> wolfmusic@gmail.com</li>
              <li className="text-gray-600"><FontAwesomeIcon icon={faLocationDot} size="lg" />{t("footer.address")}</li>
              <li className="text-gray-600"><FontAwesomeIcon icon={faPhone} size="lg" /> 1900 6750</li>
            </ul>
            <h3 className="text-2xl">{t("footer.connectwith")}</h3>
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
            <h3 className="text-xl font-bold text-gray-800">{t("footer.customer care")}</h3>

            <ul className="space-y-2">
              <li className="text-gray-600"><a href="">{t("footer.store system")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.check your order")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Payment instructions")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Forms of purchase")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Buying guide")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Introducing Wolf Fix")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Contact us")}</a></li>
            </ul>

          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">{t("footer.Sales policy")}</h3>

            <ul className="space-y-2">
              <li className="text-gray-600"><a href="">{t("footer.General policies and regulations")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Product warranty policy")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Information security policy")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Delivery process")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Return policy")}</a></li>
            </ul>
            <a href="" className="flex items-center text-gray-600 hover:text-red-500">
              <div>
                <img src="payment/zalo-buy-qrcode.jpg" width={120} height={120} alt="" />
              </div>
              <div>
                <p className="font-bold">Zalo Mini Apps</p>
                <p>{t("footer.QRcode")}</p>
              </div>
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">{t("footer.services")}</h3>

            <ul className="space-y-2">
              <li className="text-gray-600"><a href="">{t("footer.Payment incentives")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Business customers")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Recruitment information")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Warranty Policy")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.pay")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.installment")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Electronic VAT invoice")}</a></li>
              <li className="text-gray-600"><a href="">{t("footer.Register to become an agent")}</a></li>
            </ul>
              <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
