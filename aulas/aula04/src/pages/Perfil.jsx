import Menu from "../components/Menu";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSalvar = (data) => {
        console.log(data);
    };
    

    const validadores = {
        nome: {
            required: "O nome é obrigatório",
            minLenght: {
                value: 3, message: "Nome deve conter pelo menos 3 caracteres"
            }
        },

        email: {
            required: "O email é obrigatório",
        },

        nascimento: {
            validate: (value) => Date.parse(value) < Date.now() || "Data inválida",

        },
        telefone: {
            min: { value: 0, message: "Telefone é um número" },
            pattern: {value: /^\(\d{2}\) \d{5}-\d{4}$/, message: "Telefone Inválido"
            },
        },
    };

return (
    <>
        < Menu />
        <h1>Perfil Usuário</h1>
        <form onSubmit={handleSubmit(onSalvar)}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" {...register("nome", validadores.nome)} />
                {errors?.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email", validadores.email)} />
                {errors?.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="nascimento">Nascimento</label>
                <input type="date" id="nascimento" {...register("nascimento", validadores.nascimento)} />
                {errors?.nascimento && <p>{errors.nascimento.message}</p>}
            </div>

            <div>
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" {...register("telefone", validadores.telefone)} />
                {errors?.telefone && <p>{errors.telefone.message}</p>}
            </div>

            <button type="submit">Salvar</button>
        </form>
    </>
);
}

export default Perfil;