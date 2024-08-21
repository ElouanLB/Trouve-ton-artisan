import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter_artisan_card from "../hooks/Filter_artisan_card";
import Stars_icon from "../hooks/Stars_icon";
import { sendEmail } from "../services/emailService";

function Card_crafts_man() {
  const { id } = useParams();
  const { renderStars } = Stars_icon();

  const artisan = Filter_artisan_card(id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  };

  const containsMaliciousContent = (text) => {
    const maliciousPatterns = /<script|javascript:|data:|<\/script>/i;
    return maliciousPatterns.test(text);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const missingFields = [];
    if (!formData.name) missingFields.push("Nom");
    if (!formData.subject) missingFields.push("Objet");
    if (!formData.message) missingFields.push("Message");

    if (missingFields.length > 0) {
      setError(
        `Veuillez remplir les champs suivants : ${missingFields.join(", ")}`
      );
      return;
    }

    // Vérification XSS
    if (
      containsMaliciousContent(formData.name) ||
      containsMaliciousContent(formData.subject) ||
      containsMaliciousContent(formData.message)
    ) {
      setError("Contenu malveillant détecté. Veuillez vérifier vos entrées.");
      return;
    }

    const templateId = "template_m811jk9";
    const emailData = {
      to_email: artisan ? artisan.email : "",
      name: escapeHtml(formData.name),
      subject: escapeHtml(formData.subject),
      message: escapeHtml(formData.message),
    };

    sendEmail(templateId, emailData)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccessMessage("L'email a été envoyé avec succès !");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setError("");
      })
      .catch((error) => {
        console.error("Email send failed:", error);
      });
  };

  if (!artisan) {
    return <div>Loading...</div>;
  }

  let emailPrefix = "";
  let maskedEmail = "";

  if (artisan && artisan.email) {
    emailPrefix = artisan.email.substring(0, artisan.email.indexOf("@") - 6);
    maskedEmail =
      emailPrefix +
      "******" +
      artisan.email.substring(artisan.email.indexOf("@"));
  }

  return (
    <div>
      <Header />

      <main className="container">
        <div className="row">
          {/* Fiche de l'artisan */}
          <div className="col-md-12">
            <h1 className="text-center border-text">
              Description de l'artisan
            </h1>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{artisan.name}</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>Note</strong> : {renderStars(artisan.note)}
                </p>
                <p className="card-text">
                  <strong>Spécialité</strong> : {artisan.specialty}
                </p>
                <p className="card-text">
                  <strong>Localisation</strong> : {artisan.location}
                </p>
                <p className="card-text">
                  <strong>A propos</strong> : {artisan.about}
                </p>
                <p className="card-text">
                  <strong>Site Web</strong> :{" "}
                  <a
                    href={artisan.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {artisan.website}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={maskedEmail}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Objet"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                {error && !successMessage && (
                  <div className="alert alert-danger">{error}</div>
                )}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                <button onClick={handleSendEmail} className="btn btn-primary">
                  Contacter l'artisan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Card_crafts_man;