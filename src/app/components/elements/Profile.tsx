function Profile() {
  return (
    <main className="flex gap-[2rem] items-center">
      <a href="/shop" className="hidden md:flex">
        <i className="fa-solid fa-shop"></i>
      </a>
      <a href="/profile">
        <i className="fa-solid fa-user"></i>
      </a>
    </main>
  );
}

export default Profile;
