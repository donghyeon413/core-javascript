





const createUserCard = ({
  id ='',
  name = '',
  email = '',
  website:site=''
} = {}) => {
  return /* html */`
  <section class="user-card-inner">
      <article class="user-card" data-index="user-${id}">
        <h3 class="user-name">${name}</h3>
        <div class="user-resouce-info">
          <div>
            <a class="user-email" href="mailto:${email}">${email}</a>
          </div>
          <div>
            <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
          </div>
        </div>
        <button class="delete">삭제</button>
      </article>
    </section>`
}


console.log( createUserCard({
  id:1,
  name:'tiger',
  email: 'tiger@euid.dev',
})  );









