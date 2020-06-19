function createTimeline(options) {
    document.documentElement.style.setProperty('--timeline-color', `${options.color || 'black'}`);

    if (options.startRight && true ) {
        if (options.alternate && true) {
            let points=options.name.getElementsByClassName('time-point')
            for (let i=0; i<points.length; i++) {
                let black=document.createElement('div')
                black.className="point-of-time"
                if (i%2==0){
                    points[i].insertBefore(black, points[i].childNodes[0])
                    let content=points[i].getElementsByClassName('time-content')[0]
                    let offset=content.offsetWidth
                    points[i].style.marginLeft=`${offset}px`
                } else {
                    points[i].appendChild(black)
                    let content=points[i].getElementsByClassName('time-content')[0]
                    let offset=content.offsetWidth
                    points[i].style.marginRight=`${offset}px`
                } 
            }
            let years=options.name.getElementsByClassName('time-year')
            for (i=0; i<years.length; i++) {
                if (i%2==0) {
                    years[i].style.paddingRight=`${years[i].offsetWidth+12}px`
                } else {
                    years[i].style.paddingLeft=`${years[i].offsetWidth+12}px`
                }
            }
        } else {
            let points=options.name.getElementsByClassName('time-point')
            for (let i=0; i<points.length; i++) {
                let black=document.createElement('div')
                black.className="point-of-time"
                points[i].insertBefore(black, points[i].childNodes[0])
                let content=points[i].getElementsByClassName('time-content')[0]
                let offset=content.offsetWidth
                points[i].style.marginLeft=`${offset}px`
            }
            let years=options.name.getElementsByClassName('time-year')
            for (i=0; i<years.length; i++) {
                years[i].style.paddingRight=`${years[i].offsetWidth+12}px`
            }
        }
    } else {
        if (options.alternate && true) {
            let points=options.name.getElementsByClassName('time-point')
            for (let i=0; i<points.length; i++) {
                let black=document.createElement('div')
                black.className="point-of-time"
                if (i%2==0){
                    points[i].appendChild(black)
                    let content=points[i].getElementsByClassName('time-content')[0]
                    let offset=content.offsetWidth
                    points[i].style.marginRight=`${offset}px`
                } else {
                    points[i].insertBefore(black, points[i].childNodes[0])
                    let content=points[i].getElementsByClassName('time-content')[0]
                    let offset=content.offsetWidth
                    points[i].style.marginLeft=`${offset}px`
                } 
            }
            let years=options.name.getElementsByClassName('time-year')
            for (i=0; i<years.length; i++) {
                if (i%2==0) {
                    years[i].style.paddingLeft=`${years[i].offsetWidth+12}px`
                } else {
                    years[i].style.paddingRight=`${years[i].offsetWidth+12}px`
                }
            }
        } else {
            let points=options.name.getElementsByClassName('time-point')
            for (let i=0; i<points.length; i++) {
                let black=document.createElement('div')
                black.className="point-of-time"
                points[i].appendChild(black)
                let content=points[i].getElementsByClassName('time-content')[0]
                let offset=content.offsetWidth
                points[i].style.marginRight=`${offset}px`
            }
            let years=options.name.getElementsByClassName('time-year')
            for (i=0; i<years.length; i++) {
                years[i].style.paddingLeft=`${years[i].offsetWidth+12}px`
            }
        }
    }
}