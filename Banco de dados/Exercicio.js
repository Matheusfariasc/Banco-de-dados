-- Table: public.produto

-- DROP TABLE public.produto;

CREATE TABLE public.produto
(
    codigo character varying(5) COLLATE pg_catalog."default" NOT NULL,
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    valor double precision,
    categoria character varying(30) COLLATE pg_catalog."default" NOT NULL,
    valor_desconto double precision,
    valor_final double precision,
    CONSTRAINT produto_codigo_pkey PRIMARY KEY (codigo)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.produto
    OWNER to postgres;