const productos=[
    {
        id:'01',
        name:'BP-50C26',
        description:'La nueva Serie Essentials de Sharp lleva a las organizaciones al futuro de la comunicación empresarial ayudándolas a trabajar simplemente de manera más inteligente. Diseñados para adaptarse a los diversos estilos de trabajo de hoy en día, los nuevos sistemas de documentos a color de la serie Essentials permiten a los usuarios colaborar y compartir información sin problemas y de forma segura en todo el entorno de su oficina. Los servicios en la nube mejorados disponibles, como Microsoft Teams, facilitan la optimización de la comunicación y aumentan la productividad en una forma de trabajo híbrida.',
        category:'multifuncionales',
        stock:10,
        price:65000,
        img:'https://i.postimg.cc/NMz1ZQq7/bp-50c26-a.jpg'
    },
    {
        id:'02',
        name:'BP-50M26',
        description:'La nueva Serie Essentials de Sharp lleva a las organizaciones al futuro de la comunicación empresarial ayudándolas a trabajar simplemente de manera más inteligente. Diseñados para adaptarse a los diversos estilos de trabajo de hoy en día, los nuevos sistemas de documentos monocromáticos de la serie Essentials permiten a los usuarios colaborar y compartir información sin problemas y de forma segura en todo el entorno de su oficina. Los servicios en la nube mejorados disponibles, como Microsoft Teams, facilitan la optimización de la comunicación y aumentan la productividad en una forma de trabajo híbrida. * Nota: El diseño y especificaciones están sujetas a cambios sin previo aviso. Todas las marcas registradas son propiedad de sus respectivos titulares.',
        category:'multifuncionales',
        stock:15,
        price:83000,
        img:'https://i.postimg.cc/kDrWXw52/bp-50m26-a.jpg'
    },
    {
        id:'03',
        name:'BP-50C45',
        description:'La nueva Serie Essentials de Sharp lleva a las organizaciones al futuro de la comunicación empresarial ayudándolas a trabajar simplemente de manera más inteligente. Diseñados para adaptarse a los diversos estilos de trabajo de hoy en día, los nuevos sistemas de documentos a color de la serie Essentials permiten a los usuarios colaborar y compartir información sin problemas y de forma segura en todo el entorno de su oficina. Los servicios en la nube mejorados disponibles, como Microsoft Teams, facilitan la optimización de la comunicación y aumentan la productividad en una forma de trabajo híbrida.',
        category:'multifuncionales',
        stock:6,
        price:104000,
        img:'https://i.postimg.cc/Y2vV0997/bp-50c45-a.jpg'
    },
    {
        id:'04',
        name:'FDTCTA239WRKZ',
        description:'Conjunto de sensores(termostato de escape), compatible con equipos R-CD1200M Y R-CD18000M',
        category:'refacciones',
        stock:6,
        price:4300,
        img:'https://i.postimg.cc/mk1QsKTx/FDTCTA239-WRKZ.png'
    },
    {
        id:'05',
        name:'DPWB-A570DRKZ',
        description:'Unidad de sensores, compatible con equipos R-CD1200M Y R-CD18000M',
        category:'refacciones',
        stock:3,
        price:10300,
        img:'https://i.postimg.cc/gc17ZWXZ/DPWB-A570-DRKZ.png'
    },
    {
        id:'06',
        name:'FH-HZA064WRE0',
        description:'Sensor de temperatuta(Termistor), compatible con equipos R-25JTF',
        category:'refacciones',
        stock:10,
        price:1100,
        img:'https://i.postimg.cc/TYm4j4gH/FH-HZA064-WRE0.png'
    },
    {
        id:'07',
        name:'MX-754NT',
        description:'El cartucho de tóner original Sharp MX-754NT proporciona una impresión nítida y de alta calidad. Está certificado para uso en impresoras Sharp. Compatible con una variedad de tonos de gris que producen una resolución de hasta 1200 x 1200 DPI. Perfecto para documentos corporativos de alta calidad. Rendimiento aproximado de 83,000 páginas',
        category:'consumibles',
        stock:10,
        price:2000,
        img:'https://i.postimg.cc/NjkCS2N6/MX-754NT.png'
    },
    {
        id:'08',
        name:'MX-51NVBA',
        description:'El revelador original de Sharp ofrece un rendimiento aproximado de 150,000 páginas.',
        category:'consumibles',
        stock:6,
        price:1000,
        img:'https://i.postimg.cc/4xgFWQ14/MX-51-NVBA.png'
    },
    {
        id:'09',
        name:'MX-B46T',
        description:'Este cartucho de tóner Sharp MX-B46T garantiza la mejor calidad de impresión para tu equipo Sharp. Está fabricado con materiales de alta calidad para asegurar un rendimiento duradero y de calidad. Ofrece una excelente calidad de impresión con una capacidad de hasta 25,000 páginas. ¡Garantizando una vida útil más larga para tu equipo!',
        category:'consumibles',
        stock:6,
        price:5000,
        img:'https://i.postimg.cc/BvZ70Zyd/MX-B46T.png'
    }
]

//promesa

export const getProducts=()=>{
    let error=false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Ha ocurrido un error');
            }else{
                resolve(productos);
            }
        },2000);
    })
}

export const getItem=(id)=>{
    let error=false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Ha ocurrido un error a momento de buscar el item');
            }else{
                let articulo=productos.find((item)=>item.id===id);
                resolve(articulo);
            }
        },2000);
    })
}
export const getMultifuncionales=(categoria)=>{
    let error=false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Ha ocurrido un error a momento de buscar el item');
            }else{
                let articulo=productos.filter((item)=>item.category===categoria);
                resolve(articulo);
            }
        },2000);
    })
}