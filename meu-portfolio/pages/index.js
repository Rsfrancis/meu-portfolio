export default function Home() {
  return (
    <div className="landing-container">
      {/* Navegação Fixa */}
      <nav className="navbar">
        <div className="nav-content">
          <a href="#home" className="nav-link">Home</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#experiencia-academica" className="nav-link">Experiência Acadêmica</a>
          <a href="#experiencia-profissional" className="nav-link">Experiência Profissional</a>
          <a href="#projetos" className="nav-link">Projetos</a>
        </div>
      </nav>

      {/* Seção HOME */}
      <section id="home" className="section-home">
        <div className="profile-card-landing">
          <div className="profile-avatar-landing">AF</div>
          <h1 className="profile-name-landing">Artur Francisco Damascena</h1>
          <p className="profile-subtitle-landing">Estudante de Sistemas para Internet | Analista de Ouvidoria</p>
          
          <div className="contact-grid">
            <div className="contact-item-landing">
              <span className="contact-icon-landing">📞</span>
              <span>(81) 98454-9018</span>
            </div>
            
            <div className="contact-item-landing">
              <span className="contact-icon-landing">✉️</span>
              <span>arturfdamas2@gmail.com</span>
            </div>
            
            <div className="contact-item-landing">
              <span className="contact-icon-landing">📍</span>
              <span>Recife, PE</span>
            </div>
            
            <div className="contact-item-landing">
              <span className="contact-icon-landing">💼</span>
              <a href="https://linkedin.com/in/artur-francisco-b38004277" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção SOBRE */}
      <section id="sobre" className="section-alt">
        <div className="section-container">
          <h2 className="section-title-landing">
            <span className="title-icon-landing">💻</span> Sobre Mim
          </h2>
          
          <div className="sobre-content">
            <p className="sobre-text">
              Estudante de Sistemas para Internet na Unicap, com formação técnica em Logística. 
              Atualmente trabalho como Analista de Ouvidoria na Provider Soluções, onde desenvolvi 
              experiência sólida em atendimento ao cliente e suporte técnico.
            </p>

            <div className="habilidades-box">
              <h3 className="subsection-title">Habilidades</h3>
              <div className="habilidades-grid">
                <div className="habilidade-tag">• Atendimento ao Cliente</div>
                <div className="habilidade-tag">• Experiência em Sistemas Operacionais</div>
                <div className="habilidade-tag">• Gestão de Pessoas</div>
                <div className="habilidade-tag">• Boa Comunicação</div>
                <div className="habilidade-tag">• Proatividade</div>
                <div className="habilidade-tag">• Facilidade no Aprendizado</div>
                <div className="habilidade-tag">• Análise Crítica</div>
                <div className="habilidade-tag">• Pacote Office</div>
              </div>
            </div>

            <div className="certificacoes-box">
              <h3 className="subsection-title">Certificações</h3>
              <div className="cert-grid">
                <div className="cert-card">
                  <span className="cert-icon-landing">📜</span>
                  <div>
                    <strong>Curso de Língua Inglesa</strong>
                    <p>Kumon</p>
                  </div>
                </div>
                <div className="cert-card">
                  <span className="cert-icon-landing">📜</span>
                  <div>
                    <strong>Curso de Matemática</strong>
                    <p>Kumon</p>
                  </div>
                </div>
                <div className="cert-card">
                  <span className="cert-icon-landing">📜</span>
                  <div>
                    <strong>Pacote Office</strong>
                    <p>Educaweb</p>
                  </div>
                </div>
                <div className="cert-card">
                  <span className="cert-icon-landing">📜</span>
                  <div>
                    <strong>Informática Básica</strong>
                    <p>Educaweb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção EXPERIÊNCIA ACADÊMICA */}
      <section id="experiencia-academica" className="section-white">
        <div className="section-container">
          <h2 className="section-title-landing">
            <span className="title-icon-landing">🎓</span> Formação Acadêmica
          </h2>
          
          <div className="education-list">
            <div className="education-card">
              <div className="education-date">
                <span className="date-icon">📅</span>
                Jun/2024 - Mai/2027
              </div>
              <h3 className="education-title">Sistemas para Internet</h3>
              <p className="education-institution">Universidade Católica de Pernambuco (Unicap)</p>
              <p className="education-desc">
                Curso superior focado em desenvolvimento web, programação e tecnologias para internet.
              </p>
            </div>

            <div className="education-card">
              <div className="education-date">
                <span className="date-icon">📅</span>
                Fev/2021 - Dez/2023
              </div>
              <h3 className="education-title">Técnico em Logística</h3>
              <p className="education-institution">ETEPAM - Escola Técnica Estadual Professor Agamenon Magalhães</p>
              <p className="education-desc">
                Formação técnica em processos logísticos, gestão de estoque e cadeia de suprimentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia-profissional" className="section-alt">
        <div className="section-container">
          <h2 className="section-title-landing">
            <span className="title-icon-landing">💼</span> Experiência Profissional
          </h2>
          
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-date">
                  <span className="date-icon">📅</span>
                  Ago/2025 - Atual
                </div>
              </div>
              
              <h3 className="experience-title">Analista de Ouvidoria</h3>
              <p className="experience-company">Provider Soluções</p>
              
              <div className="experience-details">
                <strong>Responsabilidades:</strong>
                <ul>
                  <li>Atendimento de suporte a clientes de advogados</li>
                  <li>Gestão de agendamentos e consultas</li>
                  <li>Resolução de dúvidas sobre benefícios</li>
                </ul>
                
                <strong>Resultados:</strong>
                <ul>
                  <li>Redução da demanda presencial nas agências</li>
                  <li>Agilidade na resolução de dúvidas e solicitações</li>
                  <li>Promoção de inclusão social e digital</li>
                </ul>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-date">
                  <span className="date-icon">📅</span>
                  Jun/2024 - Ago/2025
                </div>
              </div>
              
              <h3 className="experience-title">Jovem Aprendiz</h3>
              <p className="experience-company">Provider Soluções</p>
              
              <div className="experience-details">
                <strong>Responsabilidades:</strong>
                <ul>
                  <li>Operador de telemarketing</li>
                  <li>Atendimento a segurados da Previdência Social</li>
                  <li>Suporte em agendamentos e consultas</li>
                  <li>Esclarecimento de dúvidas sobre benefícios</li>
                </ul>
                
                <strong>Resultados:</strong>
                <ul>
                  <li>Redução da demanda presencial</li>
                  <li>Maior eficiência no atendimento</li>
                  <li>Inclusão digital de beneficiários</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção PROJETOS */}
      <section id="projetos" className="section-white">
        <div className="section-container">
          <h2 className="section-title-landing">
            <span className="title-icon-landing">⚙️</span> Tecnologias Utilizadas
          </h2>
          
          <div className="projeto-destaque">
            <h3 className="projeto-titulo">Este Portfólio</h3>
            <p className="projeto-descricao">
              Portfólio desenvolvido como projeto acadêmico utilizando tecnologias modernas de desenvolvimento web.
            </p>
            
            <div className="tech-badges">
              <span className="tech-badge-landing react">React</span>
              <span className="tech-badge-landing nextjs">Next.js</span>
              <span className="tech-badge-landing tailwind">Tailwind CSS</span>
              <span className="tech-badge-landing js">JavaScript</span>
            </div>

            <div className="modulos-info">
              <h4>Módulos Utilizados</h4>
              <ul className="modulos-list">
                <li><strong>React Hooks</strong> - useState para gerenciamento de estado</li>
                <li><strong>Lucide React</strong> - Ícones modernos e responsivos</li>
                <li><strong>Tailwind CSS</strong> - Estilização com utility classes</li>
                <li><strong>Design Responsivo</strong> - Layout adaptável para mobile e desktop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-landing">
        <p>© 2025 Artur Francisco Damascena - Todos os direitos reservados</p>
        <p className="footer-subtitle-landing">Desenvolvido com React & Next.js</p>
      </footer>
    </div>
  )
}