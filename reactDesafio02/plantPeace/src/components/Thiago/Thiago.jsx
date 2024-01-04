import React from "react";
import styles from "./Thiago.module.css"

const Thiago = ({model}) => {
    return (
        <div className={styles.container}>
            <section className={styles.sectionImg}>
                <img src={`src/${model.imgMe}`} alt={model.name} />
            </section>
            <section className={styles.sectionContent}>
                <div>
                    <h1>{model.name}</h1>
                    <p>Meu nome é Thiago Almeida de Paiva, tenho 20 anos e faço Ciência da Computação
                        na Universidade Federal do Agreste de Pernambuco (UFAPE). Nasci em Veranópolis - RS
                        e cresci em Belo Horizonte - MG, aos 18 anos me mudei para Garanhuns - PE para iniciar
                        a faculdade, porém meus pais continuam morando em Belo Horizonte. Moro com minha irmã e meus dois
                        cachorros, Romeu e Jullieta, e talvez agora mais quatro cachorros pois a Jullie teve filhotes.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Thiago;