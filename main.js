document.addEventListener('DOMContentLoaded', () => {
  const faqcontainer = document.querySelector('.faq-content');

  faqcontainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    //toggle icon

    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    //toggle visibility of open

    groupBody.classList.toggle('open');

    //close other groups

    const otherGroups = faqcontainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');

        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus')
      }
    })

  })
})

function openSideBar() {
  const sidebar = document.querySelector('.mobile-menu');

  sidebar.style.display = 'flex'
}

function closeSideBar() {
  const sidebar = document.querySelector('.mobile-menu');

  sidebar.style.display = 'none'
}