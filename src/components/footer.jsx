import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
        <h6>Desarrollado por <span>Francisco</span> </h6>
        <ul>
            <li>
                <a href="https://wa.me/584242526757">
                <i className="fa-brands fa-whatsapp"></i>
                </a>
                </li>
            <li>
            <a href="mailto:frako23@example.com">
                <i className="fa-solid fa-envelope"></i>
                </a>
                </li>
            <li>
            <a href="https://github.com/frako23">
                <i className="fa-brands fa-github"></i>
                </a>
                </li>
            <li>
            <a href="https://www.linkedin.com/in/franciscorozco/">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                </li>
        </ul>
        </div>
  )
}
