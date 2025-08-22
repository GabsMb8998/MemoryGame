    import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    import '../index.css'
    import "../App.css"

    // Array de pares de cartas
    const cardPairs = [
        { image: '/imagens/1.png', type: 'imagem' },
        { image: '/respostas/1.png', type: 'resposta' },
        { image: '/imagens/2.png', type: 'imagem' },
        { image: '/respostas/2.png', type: 'resposta' },
        { image: '/imagens/3.png', type: 'imagem' },
        { image: '/respostas/3.png', type: 'resposta' },
        { image: '/imagens/4.png', type: 'imagem' },
        { image: '/respostas/4.png', type: 'resposta' },
        { image: '/imagens/5.png', type: 'imagem' },
        { image: '/respostas/5.png', type: 'resposta' },
        { image: '/imagens/6.png', type: 'imagem' },
        { image: '/respostas/6.png', type: 'resposta' },
        { image: '/imagens/7.png', type: 'imagem' },
        { image: '/respostas/7.png', type: 'resposta' },
        { image: '/imagens/8.png', type: 'imagem' },
        { image: '/respostas/8.png', type: 'resposta' },
        { image: '/imagens/9.png', type: 'imagem' },
        { image: '/respostas/9.png', type: 'resposta' },
        { image: '/imagens/10.png', type: 'imagem' },
        { image: '/respostas/10.png', type: 'resposta' },
        { image: '/imagens/11.png', type: 'imagem' },
        { image: '/respostas/11.png', type: 'resposta' },
        { image: '/imagens/12.png', type: 'imagem' },
        { image: '/respostas/12.png', type: 'resposta' },
        { image: '/imagens/13.png', type: 'imagem' },
        { image: '/respostas/13.png', type: 'resposta' },
        { image: '/imagens/14.png', type: 'imagem' },
        { image: '/respostas/14.png', type: 'resposta' },
    ];

    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);

    export function MemoryGame() {
        const navigate = useNavigate();
        const [cards, setCards] = useState(shuffledCards);
        const [flippedIndices, setFlippedIndices] = useState([]);
        const [matchedCards, setMatchedCards] = useState([]);
        const [lockBoard, setLockBoard] = useState(false);
        const [timeAtual, setTimeAtual] = useState('red');
        const [pontuacao, setPontuacao] = useState(localStorage.getItem('pontuacao') ? JSON.parse(localStorage.getItem('pontuacao')) : { red: 0, blue: 0 });
        

        useEffect(() => {
            if (matchedCards.length === cards.length) {
                localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
                setTimeout(() => navigate('/vencedor'), 1000);
            }
        }, [matchedCards, cards.length, navigate]);

        const handleCardClick = (index) => {
            if (lockBoard || flippedIndices.includes(index) || matchedCards.includes(index)) return;

            setFlippedIndices((prev) => [...prev, index]);

            if (flippedIndices.length === 1) {
                setLockBoard(true);
                const firstIndex = flippedIndices[0];

                if (cards[firstIndex].image.split('/').pop() === cards[index].image.split('/').pop()) {
                    setMatchedCards((prev) => [...prev, firstIndex, index]);
                    aumentarPontuacao();
                } else {
                    setTimeout(() => {
                        setTimeAtual((prevTime) => (prevTime === 'red' ? 'blue' : 'red'));
                        resetBoard();
                    }, 1000);
                }
            }
        };

        const aumentarPontuacao = () => {
            setPontuacao((prevPontuacao) => ({
                ...prevPontuacao,
                [timeAtual]: prevPontuacao[timeAtual] + 1,
            }));
            setLockBoard(false);
            resetBoard();
        };

        const resetBoard = () => {
            setFlippedIndices([]);
            setLockBoard(false);
        };

        return (
            <div
                className={`font-josefin h-screen flex flex-col items-center justify-center bg-black`}>
            <div className='text-white border-1 border-white absolute left-0 top-5 w-[19%] pl-2 py-4 2xl:py-7 2xl:text-2xl'>
                <div className='relative' >
                    <span className='ml-3'> JOGO DA MEMÓRIA</span>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-0.5 2xl:gap-1 mb-4 mt-10">
                {cards.map((card, index) => {
                const isFlipped = flippedIndices.includes(index) || matchedCards.includes(index);

                    return (
                    <div
                        key={index}
                        className="w-[10px] h-[90px] xl:w-[124px] xl:h-[124px] 2xl:w-48 2xl:h-48  perspective"
                        onClick={() => handleCardClick(index)}
                    >
                        <div
                        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                            isFlipped ? 'rotate-y-180' : ''
                        }`}
                        >
                        {/* Frente */}
                        <div className="absolute w-full h-full backface-hidden bg-[#81EF63] text-white flex items-center justify-center text-xl rounded-2xl shadow-lg">
                        
                        </div>

                        {/* Verso com fundo branco */}
                        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl">
                            <img
                            src={card.image}
                            alt={`Card ${index}`}
                            className="w-full h-full object-contain p-4"
                            />
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        );
    }
