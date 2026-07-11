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

  // 10. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783790258/L9-T1___RENDER___Esc_1-500_ldxx3e.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 11. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783790266/L10-T1___RENDER___Esc_1-500_umisdw.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 12. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231168/E1.1-T2___CARATULA_ESTRUCTURAS___Esc_1-200_sebwlp.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 13. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231181/E1-T2___CIMENTACI%C3%93N___Esc_1-200_ljvszr.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 14. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231190/E2-T2___CIMENTACI%C3%93N___Esc_1-200_i3wsbk.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 15. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231199/E3-T2___TECHOS_1___Esc_1-200_ugbc9e.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 16. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231208/E4-T2___TECHOS_2___Esc_1-200_buo0wt.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 17. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231219/E5-T2___TECHOS_3___Esc_1-200_dvalo9.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

  // 18. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231266/L11.1-T2___CARATULA___Esc_1-250_vkimxw.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

    // 19. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783790944/L11-T2___PRIMER_NIVEL___Esc_1-250_r9sozn.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

    // 20. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783790952/L12-T2___SEGUNDO_NIVEL___Esc_1-250_i7nvnc.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

    // 21. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783787347/L13-T2___TERCER_NIVEL___Esc_1-250_dp19qg.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 22. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783787355/L14-T2___TECHOS___Esc_1-250_vqaudm.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 23. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231744/L15-T2___CORTES___Esc_1-250_ojeg0z.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 24. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783231767/L16-T2___ELEVACIONES___Esc_1-250_cvf8vg.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

     // 25. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792078/L17.1-T3___CARATULA_SECTOR_1___Esc_1-100_regshj.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 26. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791117/L17-T3___PLANTA_1_SECTOR_1___Esc_1-100_ysanpx.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,
  
      // 27. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791133/L18-T3___PLANTA_2_SECTOR_1___Esc_1-100_y39hvk.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,
  
      // 28. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791177/L19-T3___TECHO_3_SECTOR_1___Esc_1-100_za2sbe.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 29. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791199/L20-T3___CORTE_A-B_SECTOR_1___Esc_1-100_ga1z8n.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 30. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791236/L21-T3___CORTE_C-D_SECTOR_1___Esc_1-100_qfccne.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 31. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791855/L22-T3___ELEVACI%C3%93N_SECTOR_1___Esc_1-100_ji4ili.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 32. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792344/L23.1-T3___CARATULA_SUBSECTOR_1___Esc_1-50_luup39.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 33. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791867/L23-T3___PLANTA_1_SUBSECTOR_1___Esc_1-50_ibk3th.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 34. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791887/L24-T3___PLANTA_2_SUBSECTOR_1___Esc_1-50_wvmgme.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 35. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791903/L25-T3___TECHO_3_SUBSECTOR_1___Esc_1-50_u77zv2.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 36. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791944/L26-T3___CORTE_A_SUBSECTOR_1___Esc_1-50_i18itr.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 37. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791951/L27-T3___CORTE_B_SUBSECTOR_1___Esc_1-50_wrtfpr.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 38. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783791961/L28-T3___CORTE_D_SUBSECTOR_1___Esc_1-50_ruj7pq.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 39. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792574/L29.1-T3___CARATULA_SECTOR_2___Esc_1-100_d6ihx2.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 40. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792583/L29-T3___PLANTA_1_SECTOR_2___Esc_1-100_aepslm.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 41. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792591/L30-T3___PLANTA_2_SECTOR_2___Esc_1-100_ngvmqa.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 42. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792597/L31-T3___PLANTA3_SECTOR_2___Esc_1-100_ofoa7s.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 43. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792655/L32-T3___TECHO_4_SECTOR_2___Esc_1-100_rmawtv.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 44. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792684/L33-T3___CORTE_E-F_SECTOR_2___Esc_1-100_cg6ahx.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 45. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792693/L34-T3___CORTE_G-H_SECTOR_2___Esc_1-100_jlbehm.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 46. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783792829/L35-T3___ELEVACI%C3%93N_SECTOR_2___Esc_1-100_vrkuih.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 47. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793540/L36.1-T3___CARATULA_SUBSECTOR_2___Esc_1-50_lstsph.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 48. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793552/L36-T3___PLANTA_1_SUBSECTOR_2___Esc_1-50_i4ix6e.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 49. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793559/L37-T3___PLANTA_2_SUBSECTOR_2___Esc_1-50_bomsrp.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 50. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793564/L38-T3___PLANTA_3_SUBSECTOR_2___Esc_1-50_oc5sjl.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 51. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793570/L39-T3___TECHO_4_SUBSECTOR_2___Esc_1-50_yvlpvf.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 52. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793578/L40-T3___CORTE_E_SUBSECTOR_2___Esc_1-50_s625ad.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 53. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793584/L41-T3___CORTE_F_SUBSECTOR_2___Esc_1-50_jbdkxa.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 54. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793589/L42-T3___CORTE_G_SUBSECTOR_2___Esc_1-50_dy6g8y.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 55. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793607/L43.1_CARATULA_DE_DETALLE_mgqytd.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 56. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793660/L43_PLANTA_DETALLE_DE_ESCALERA_qp8hjd.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 57. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793676/L44_CORTES_DETALLE_DE_ESCALERA_eqmilt.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 58. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793682/L45_PLANTA_DETALLE_DE_BA%C3%91O_d2ewns.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 59. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783793688/L46_CORTES_DETALLE_DE_BA%C3%91O_kuyva0.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 60. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794452/0001_xxkcgc.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 61. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794464/0002_x7tumv.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 62. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794472/0003_klvtvf.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 63. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794478/0004_g2nxbo.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 64. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794497/0005_dmic0j.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 65. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794511/0006_yywl9u.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 66. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794518/0007_aldkli.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 67. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794524/0008_wchsqj.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 68. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794531/0009_hvr1bg.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 69. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794538/0010_iyspaf.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 70. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794544/0011_m1zemj.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 71. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794776/IE001_hzoiua.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 72. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794786/IE002_uzjz7f.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 73. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794793/IE003_pjx5xd.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 74. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794804/IE004_ioo7pu.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 75. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794812/IE005_dhgpqj.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 76. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794821/IE006_l4iuuc.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 77. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794828/IE007_azqutx.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 78. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794837/IE008_tlmvgw.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 79. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794845/IE009_tsldnt.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 80. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794858/IE010_zbxmx8.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 81. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794873/IE011_lhh32r.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

      // 82. 
  <img loading="lazy" decoding="async" 
    src="https://res.cloudinary.com/dprkofjle/image/upload/v1783794894/IE012_x7kwef.png" 
    className="w-full h-full object-cover select-none" 
    draggable={false}
  />,

];
