// feed posts array
const posts = [
    {
        id: 1,
        name: 'Sarah Johnson',
        handle: '@sarahj',
        time: '2h ago',
        avatar: 'https://i.pravatar.cc/40?img=1',
        content: 'Just shipped a new feature for our design system. Clean components, consistent spacing, and full dark mode support. Feels good to finally get this out!',
        image: 'https://picsum.photos/seed/post1/600/300',
        likes: 124,
        comments: 38,
        tag: 'latest'
    },
    {
        id: 2,
        name: 'Marcus Lee',
        handle: '@marcuslee',
        time: '5h ago',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: 'Tailwind CSS v4 is a game changer. The new CSS-first config approach is so much cleaner. No more javascript config files!',
        image: 'https://picsum.photos/seed/post2/600/300',
        likes: 89,
        comments: 21,
        tag: 'popular'
    },
    {
        id: 3,
        name: 'Aisha Patel',
        handle: '@aishap',
        time: '1d ago',
        avatar: 'https://i.pravatar.cc/40?img=3',
        content: 'Accessibility is not an afterthought. Built proper focus states, aria labels, and keyboard navigation into every component this sprint. Users notice.',
        image: null,
        likes: 56,
        comments: 14,
        tag: 'following'
    },
    {
        id: 4,
        name: 'Jake Turner',
        handle: '@jaketurner',
        time: '2d ago',
        avatar: 'https://i.pravatar.cc/40?img=4',
        content: 'Just launched my first open source project. 200 stars in 24 hours. Never expected this kind of response from the community!',
        image: 'https://picsum.photos/seed/post4/600/300',
        likes: 310,
        comments: 67,
        tag: 'popular'
    },
    {
        id: 5,
        name: 'Elena Cruz',
        handle: '@elenacruz',
        time: '3d ago',
        avatar: 'https://i.pravatar.cc/40?img=5',
        content: 'Dark mode is not just a trend — it reduces eye strain and saves battery on OLED screens. Every app should support it by default.',
        image: null,
        likes: 45,
        comments: 9,
        tag: 'following'
    },
    {
        id: 6,
        name: 'Noroff Online',
        handle: '@noroff',
        time: '4h ago',
        avatar: 'https://i.pravatar.cc/40?img=8',
        content: 'Reminder to all frontend students - Portfolio 2 submissions are due Sunday 07/05. Make sure your GitHub repos are public, and your reflection PDF is named correctly. You got this! 💪',
        image: 'https://images.unsplash.com/photo-1634245481935-1a496162ae15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtaW5kZXJ8ZW58MHx8MHx8fDA%3D',
        likes: 212,
        comments: 44,
        tag: 'latest'
    },
]

// render a single post card
function createPostCard(post) {
    return `
    <article class="flex flex-col w-full gap-4 p-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-cyan-500 transition-colors">
      <div class="flex items-center gap-3">
        <img src="${post.avatar}" alt="${post.name} avatar" class="w-10 h-10 rounded-full" />
        <div class="flex flex-col gap-0.5">
          <span class="text-sm font-medium text-white">${post.name}</span>
          <span class="text-xs text-gray-400">${post.handle} · ${post.time}</span>
        </div>
      </div>
      <p class="text-sm text-gray-300 leading-relaxed">${post.content}</p>
      ${post.image ? `<img src="${post.image}" alt="post image" class="w-full h-64 object-cover" />` : ''}
      <div class="flex items-center gap-6 pt-2 border-t border-[#2a2a2a]">
        <button onclick="likePost(this)" class="flex items-center gap-2 text-xs text-gray-400 cursor-pointer hover:text-cyan-500 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          ${post.likes}
        </button>
        <button class="flex items-center gap-2 text-xs text-gray-400 cursor-pointer hover:text-cyan-500 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          ${post.comments}
        </button>
        <button class="flex items-center gap-2 text-xs text-gray-400 cursor-pointer hover:text-cyan-500 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          Share
        </button>
      </div>
    </article>
  `
}

// render all posts
function renderPosts(filter = 'latest') {
    const feed = document.getElementById('feed')
    if (!feed) return

    const filtered = filter === 'latest'
        ? posts
        : posts.filter(p => p.tag === filter)

    feed.innerHTML = filtered.map(createPostCard).join('')
}

// like toggle for a post
function likePost(btn) {
    btn.classList.toggle('text-cyan-500')
}

// create a new post
function setupCreatePost() {
    const form = document.getElementById('create-post-form')
    if (!form) return

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const textarea = document.getElementById('post-content')
        const value = textarea.value.trim()
        if (!value) return

        const newPost = {
            id: Date.now(),
            name: 'You',
            handle: '@me',
            time: 'just now',
            avatar: 'https://i.pravatar.cc/40?img=10',
            content: value,
            image: null,
            likes: 0,
            comments: 0,
            tag: 'latest'
        }

        posts.unshift(newPost)
        renderPosts()
        textarea.value = ''
    })
}

// sort buttons
function setupSort() {
    const buttons = document.querySelectorAll('[data-sort]')

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => {
                b.classList.remove('bg-cyan-500', 'text-[#0f0f0f]')
                b.classList.add('text-gray-400', 'border', 'border-[#2a2a2a]')
            })
            this.classList.add('bg-cyan-500', 'text-[#0f0f0f]')
            this.classList.remove('text-gray-400', 'border', 'border-[#2a2a2a]')
            renderPosts(this.dataset.sort)
        })
    })
}

// init
document.addEventListener('DOMContentLoaded', function () {
    renderPosts()
    setupCreatePost()
    setupSort()
})