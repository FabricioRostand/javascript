// Variáveis globais
let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];
let player1Wins = 0;
let player2Wins = 0;
let draws = 0;
let player1Name = '';
let player2Name = '';

// Função para verificar se houve um vencedor
const checkWinner = () => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return board[a];
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        return 'draw';
    }

    return null;
};

// Função para exibir mensagem de fim de jogo
const showGameEndMessage = (result) => {
    const messageElement = document.getElementById('message');
    if (result === 'draw') {
        messageElement.textContent = 'Empate!';
        draws++;
        document.getElementById('draws').textContent = draws;
    } else {
        const winner = result === 'X' ? player1Name : player2Name;
        messageElement.textContent = `${winner} venceu!`;
        if (result === 'X') {
            player1Wins++;
            document.getElementById('player1Wins').textContent = player1Wins;
        } else {
            player2Wins++;
            document.getElementById('player2Wins').textContent = player2Wins;
        }
    }
};

// Função para marcar uma célula do tabuleiro
const handleCellClick = (index) => {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementById(`cell${index}`).textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        showGameEndMessage(winner);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

// Função para reiniciar o jogo
const restartGame = () => {
    currentPlayer = 'X';
    gameActive = true;
    board = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('message').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
};

// Adiciona um ouvinte de evento de clique ao botão de reiniciar
document.getElementById('restartButton').addEventListener('click', restartGame);

// Adiciona manipuladores de eventos de clique às células do tabuleiro
document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

// Adiciona um manipulador de eventos de envio ao formulário
document.getElementById('playerNamesForm').addEventListener('submit', handleFormSubmit);

