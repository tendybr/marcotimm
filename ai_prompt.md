Você é um desenvolvedor especialista em **Remotion** (React Video Creation) com foco em criar motion graphics dinâmicos, fluidos e de alto nível estético. 

Sua tarefa é gerar o código completo para um projeto Remotion baseado no roteiro e nas rigorosas especificações técnicas abaixo.

---

### 🎬 O Roteiro (Conceito e Tempo)
**Conceito**: Interface de Dados (UI/UX Motion - Glassmorphism)
**Duração**: 20 segundos (Configurar para 600 frames em `30fps`)
**Resolução**: 1920x1080
**Estética**: Futurista, Limpa, Vidro Fosco, Profundidade 2.5D, Detalhes Técnicos (Micro-interações).
**Paleta de Cores**: Fundo escuro (Dark Navy: `linear-gradient(135deg, #090e17 0%, #152336 100%)`), elementos de interface transparentes/brancos foscos, acentos em Azul Elétrico (`#00f0ff` com text-shadow neumórfico) e Verde Neon (`#39ff14`).

**Cenas e Timings:**
- **00-05s (Frames 0-150): Inicialização.** Fundo escuro. Janelas flutuantes glassmorphism surgem com escala elástica. Uma mostra números binários rodando e um gráfico de barras azul crescendo.
- **05-10s (Frames 150-300): Expansão.** Novas janelas menores emergem do centro (Cena 1 ainda na tela usando `<Sequence from={150}>`) e movem-se radialmente para os lados, mostrando mini-gráficos. Malha digital surge no fundo.
- **10-15s (Frames 300-450): Fly-through.** Movimento falso em 3D (Z-Depth limitando-se a CSS puro via `perspective` e `translateZ` no contêiner ou simplesmente via `scale` progressivo). As janelas avançam contra a câmera, ganhando `filter: blur(...)` para sumir pelas laterais, criando um túnel de dados.
- **15-18s (Frames 450-540): Loading.** Transição esmaecendo os painéis do túnel para um novo painel central e limpo. Um anel de loading fino e azul rotaciona ou completa círculo (`strokeDashoffset`).
- **18-20s (Frames 540-600): Conclusão.** Anel transita rapidamente para um ícone de "Check" verde (morphing de stroke-color e saltando em spring). Luz verde pulsa atrás do check e aparece a tipografia "PROCESSING COMPLETE" deslizando de baixo.

---

### ⚙️ Especificações Técnicas (Regras do Remotion a seguir rigorosamente)

1. **PROIBIDO USO DE ANIMAÇÕES CSS OU TAILWIND**: Todas as animações **DEVEM** ser conduzidas e matematicamente amarradas ao hook `useCurrentFrame()`, combinadas aos utilitários `interpolate()` e `spring()`. 

2. **Tipografia Padrão Premium**: Use estritamente o pacote `@remotion/google-fonts`. Use a fonte **JetBrains Mono** para compor os dados binários/gráficos e a fonte **Inter** nas labels da UI e texto final de loading completo. Garanta o `waitUntilDone()` no index/raiz para evitar flicker do vídeo.

3. **Arquitetura Glassmorphism Perfeita**: 
Você deve usar a seguinte estrutura CSS nas divisões de janela para manter as referências corretas de vidro fosco no renderizador WebKit:
```css
backgroundColor: "rgba(255, 255, 255, 0.05)",
backdropFilter: "blur(12px) saturate(150%)",
border: "1px solid rgba(255, 255, 255, 0.15)",
boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
borderRadius: "16px"
```

4. **Transições de Cenas Dinâmicas**:
Em vez de depender só de `@remotion/transitions`, o foco da movimentação contínua será na sobreposição por `<Sequence from={N}>`. 
- **Entradas**: Aplique `spring({ fps, frame, config: { damping: 12 } })` na propriedade de CSS `transform: scale(...)` de cada painel.
- **Fly-Through**: Coloque seus UI components dentro de um div com `perspective: 1200px` e amasse suas escalas ou aplique `translateZ` com interpolação contínua (mapeando o frame 300 para o 450) até extravasar a câmera visual e sumir com as bordas em gaussian desfoque (`blur()`).

Gere um projeto limpo, modular, separando ao menos 3 ou 4 componentes funcionais principais na pasta raiz (`Root.tsx`, `MainComposition.tsx`, `GlassPanel.tsx` ou similar). O código gerado deve ser "copiar-e-colar", funcional na base do framework. Mantenha os áudios como referências descritivas caso queira inseri-los futuramente através da tag de `<Audio src={...}>` usando `staticFile()`.
