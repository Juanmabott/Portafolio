import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>📧 Email: Bottaro.juanmanuel@gmail.com</p>
          <a href="https://www.linkedin.com/in/juan-manuel-bottaro-4318b1223/" >💼 LinkedIn: Juan Manuel Bottaro</a>
          <a href="https://github.com/Juanmabott">🐱 GitHub: Juanmabott</a>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
