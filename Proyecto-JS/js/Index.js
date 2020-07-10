'use strict'

$(document).ready(function(){
    //Setting up slider
    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
    });

        //Posts
    var posts = [
        {
            title: "Prueba de título 6",
            date: "Publicado: " + moment().format('LLLL'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nibh magna, rhoncus viverra nisi sollicitudin sed. Maecenas porta turpis in luctus aliquam. Mauris efficitur lacus vitae sagittis molestie. Ut cursus enim a metus sollicitudin mattis. Aenean blandit lorem tellus, vitae convallis odio suscipit eget. Vivamus euismod neque in turpis faucibus ornare. Nulla interdum at justo a consectetur. Maecenas vitae ex justo. Nullam mollis tellus ac risus consequat aliquam."
        },
        {
            title: "Prueba de título 5",
            date: "Publicado: " + moment('20191015 134710').format('LLLL'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nibh magna, rhoncus viverra nisi sollicitudin sed. Maecenas porta turpis in luctus aliquam. Mauris efficitur lacus vitae sagittis molestie. Ut cursus enim a metus sollicitudin mattis. Aenean blandit lorem tellus, vitae convallis odio suscipit eget. Vivamus euismod neque in turpis faucibus ornare. Nulla interdum at justo a consectetur. Maecenas vitae ex justo. Nullam mollis tellus ac risus consequat aliquam."
        },
        {
            title: "Prueba de título 4",
            date: "Publicado: " + moment('20191015 122310').format('LLLL'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nibh magna, rhoncus viverra nisi sollicitudin sed. Maecenas porta turpis in luctus aliquam. Mauris efficitur lacus vitae sagittis molestie. Ut cursus enim a metus sollicitudin mattis. Aenean blandit lorem tellus, vitae convallis odio suscipit eget. Vivamus euismod neque in turpis faucibus ornare. Nulla interdum at justo a consectetur. Maecenas vitae ex justo. Nullam mollis tellus ac risus consequat aliquam."
        },
        {
            title: "Prueba de título 3",
            date: "Publicado: " + moment('20191015 101510').format('LLLL'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nibh magna, rhoncus viverra nisi sollicitudin sed. Maecenas porta turpis in luctus aliquam. Mauris efficitur lacus vitae sagittis molestie. Ut cursus enim a metus sollicitudin mattis. Aenean blandit lorem tellus, vitae convallis odio suscipit eget. Vivamus euismod neque in turpis faucibus ornare. Nulla interdum at justo a consectetur. Maecenas vitae ex justo. Nullam mollis tellus ac risus consequat aliquam."
        },
        {
            title: "Prueba de título 2",
            date: "Publicado: " + moment('20191015 081010').format('LLLL'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nibh magna, rhoncus viverra nisi sollicitudin sed. Maecenas porta turpis in luctus aliquam. Mauris efficitur lacus vitae sagittis molestie. Ut cursus enim a metus sollicitudin mattis. Aenean blandit lorem tellus, vitae convallis odio suscipit eget. Vivamus euismod neque in turpis faucibus ornare. Nulla interdum at justo a consectetur. Maecenas vitae ex justo. Nullam mollis tellus ac risus consequat aliquam."
        },
        {
            title: "Prueba de título 1",
            date: "Publicado: " + moment('20191014 225510').format('LLLL'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nibh magna, rhoncus viverra nisi sollicitudin sed. Maecenas porta turpis in luctus aliquam. Mauris efficitur lacus vitae sagittis molestie. Ut cursus enim a metus sollicitudin mattis. Aenean blandit lorem tellus, vitae convallis odio suscipit eget. Vivamus euismod neque in turpis faucibus ornare. Nulla interdum at justo a consectetur. Maecenas vitae ex justo. Nullam mollis tellus ac risus consequat aliquam."
        }
    ];

    console.table(posts);

    posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
            `;
            $("#posts").append(post);

    });
});