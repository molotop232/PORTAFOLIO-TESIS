import React from 'react';

// ============================================================================
// INSTRUCCIONES PARA AGREGAR TUS PROPIAS LÁMINAS DESDE CLOUDINARY:
// ============================================================================
// 1. Sube tus imágenes a Cloudinary (u otro servicio de hosting de imágenes).
// 2. Copia la URL directa de la imagen (que termine en .png, .jpg, etc).
// 3. Reemplaza los elementos de este array por etiquetas <img loading="lazy" decoding="async"> apuntando a tus URLs.
// 
// EJEMPLO CON CLOUDINARY:
// export const dossierPages: React.ReactNode[] = [
//   <img loading="lazy" decoding="async" src="https://res.cloudinary.com/tu-usuario/image/upload/v1234/portada.png" className="w-full h-full object-contain bg-white select-none" draggable={false} />,
//   <img loading="lazy" decoding="async" src="https://res.cloudinary.com/tu-usuario/image/upload/v1234/pagina-1.png" className="w-full h-full object-contain bg-white select-none" draggable={false} />,
//   <img loading="lazy" decoding="async" src="https://res.cloudinary.com/tu-usuario/image/upload/v1234/pagina-2.png" className="w-full h-full object-contain bg-white select-none" draggable={false} />,
//   <img loading="lazy" decoding="async" src="https://res.cloudinary.com/tu-usuario/image/upload/v1234/contraportada.png" className="w-full h-full object-contain bg-white select-none" draggable={false} />
// ];
// ============================================================================

export const dossierPages: React.ReactNode[] = [
  // 0. Cover
  <img 
    decoding="async"
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783224253/L0_-T1___INICIO_csi2it.png" 
    className="w-full h-full object-contain bg-white select-none" 
    draggable={false} 
  />,

  // 1. Inside Cover
  <img 
    decoding="async"
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783224973/L0.1_-T1___INDICEpdf_bkhclx.png" 
    className="w-full h-full object-contain bg-white select-none" 
    draggable={false} 
  />,

  // 2. Intro / Manifesto
  <img 
    loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783225683/L1-T1___PLOT_PLAN___Esc_1-1000_1_f6nnkx.png" 
    className="w-full h-full object-contain bg-white select-none" 
    draggable={false} 
  />,

  // 3. Table of Contents
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783225805/L2-T1___PLOT_PLAN___Esc_1-500_whtcs6.png" 
    className="w-full h-full object-contain bg-white select-none" 
    draggable={false} 
  />,

  // 4. Project 1 - Image
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783228024/L3-T1___PLOT_PLAN_PROPUESTA___Esc_1-500_fp6pxm.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 5. Project 1 - Details
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783228123/L4-T1___PRIMER_NIVEL___Esc_1-500_y9uzjf.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 6. Project 2 - Details (Dark mode page)
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783229058/L5-T1___SEGUNDO_NIVEL___Esc_1-500_s3caj4.png" 
    className="w-full h-full object-contain bg-white select-none" 
    draggable={false} 
  />,


  // 7. Project 2 - Image
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783229044/L6-T1___TERCER_NIVEL___Esc_1-500_oippna.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 8. Project 3 - Image
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783229071/L7-T1___CORTES___Esc_1-500_r4ickl.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 9. Project 3 - Details
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783229077/L8-T1___ELEVACIONES___Esc_1-500_cusltn.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 10. The Studio & Contact
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783229114/L9-T1___RENDER___Esc_1-500_pkeurb.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 11. Back Cover
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231168/E1.1-T2___CARATULA_ESTRUCTURAS___Esc_1-200_sebwlp.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 12. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231181/E1-T2___CIMENTACI%C3%93N___Esc_1-200_ljvszr.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 13. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231190/E2-T2___CIMENTACI%C3%93N___Esc_1-200_i3wsbk.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 14. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231199/E3-T2___TECHOS_1___Esc_1-200_ugbc9e.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 15. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231208/E4-T2___TECHOS_2___Esc_1-200_buo0wt.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 16. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231219/E5-T2___TECHOS_3___Esc_1-200_dvalo9.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 17. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231266/L11.1-T2___CARATULA___Esc_1-250_vkimxw.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

    // 18. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231275/L11-T2___PRIMER_NIVEL___Esc_1-250_pvqiql.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

    // 19. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231284/L12-T2___SEGUNDO_NIVEL___Esc_1-250_st5vjk.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

    // 20. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231291/L13-T2___TERCER_NIVEL___Esc_1-250_aswisv.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 21. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231299/L14-T2___TECHOS___Esc_1-250_f4jhil.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 22. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231744/L15-T2___CORTES___Esc_1-250_ojeg0z.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 23. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231767/L16-T2___ELEVACIONES___Esc_1-250_cvf8vg.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

];
