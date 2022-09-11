<template>
    <nav id="sidebar" class="">
        <div class="sidebar-header">
            <h3>Judy Giera</h3>
            <p>Not So Fine Art</p>
        </div>

        <ul>
            <li class="active">
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background-color: black;
    color: #fff;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
}

#sidebar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}

#sidebar .sidebar-header {
    padding: 10px;
    background: black;
    color: #fff;
    font-family: 'Delius Unicase', cursive;
    text-align: left;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar p {
    color: #fff;
    margin: 0;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #fff;
    background: #f00;
}

/* currently active page highlight */
#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    /* background-color: #f00; */
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
        transform: rotateY(90deg);
    }

    #sidebar.active {
        margin-left: 0;
        transform: none;
    }
}
</style>