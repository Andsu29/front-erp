import axios from "axios";


const url = "http://localhost:8000"

export function GET_ITENS() {
    return axios.get(`${url}/produtos`);
  }

// Colocar uma função para notificar na tela
// ver algo melhor para retornar
export async function POST_PRODUTO(body) {
    try {
      return await axios.post(`${url}/produtos`, body).then(() => {
        console.log("Produto Adicionado");
      });
    } catch (error) {
      console.error("Erro ao enviar produto: ", error);
    }
  }