import React from "react";

export const CardMap = () => {
  return (
    <div className="max-w-[90%] mx-auto mb-8 sm:max-w-[1200px]">
      <h2 className="text font-[700]  text-3xl text-center mb-6">
        Quadra 02 lote 01 sobre loja 02 etapa A , HZ Brasil Empresarial,
        Valparaíso de Goiás
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.655028886112!2d-47.97700482486391!3d-16.083381484598178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359858fb0af83a7%3A0x775b6a22cc9dc214!2sImobili%C3%A1ria%20Martins%20e%20Silva!5e0!3m2!1spt-BR!2sbr!4v1711832737732!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
