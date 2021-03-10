// 恋爱计时
function lovexhjSitetime() {
                window.setTimeout("lovexhjSitetime()", 1000);
                var seconds = 1000
                var minutes = seconds * 60
                var hours = minutes * 60
                var days = hours * 24
                var years = days * 365
                var today = new Date()
                var todayYear = today.getFullYear()
                var todayMonth = today.getMonth()+1
                var todayDate = today.getDate()
                var todayHour = today.getHours()
                var todayMinute = today.getMinutes()
                var todaySecond = today.getSeconds()
                // 时间设置
                var t1 = Date.UTC(2020, 02, 02, 00, 00, 00)
                var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
                var diff = t2 - t1
                var diffYears = Math.floor(diff / years)
                var diffDays = Math.floor((diff / days) - diffYears * 365)
                var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
                var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
                var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
                    diffMinutes * minutes) / seconds)
                document.getElementById("lovexhjSitetime").innerHTML = "我们相恋了 " + diffYears + " 年 " + diffDays + " 天 " +
                    diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒啦"
            }
            lovexhjSitetime()
// 点击效果
	(function() {
        window.onclick = function(event) {
            var heart = document.createElement("b");
            heart.onselectstart = new Function('event.returnValue=false');
            document.body.appendChild(heart).innerHTML = "❤HUHU❤";//输出
            heart.style.cssText = "position: fixed;left:-100%;";
            var f = 16,
                x = event.clientX - f / 2, 
                y = event.clientY - f, 
                c = randomColor(), 
                a = 1, 
                s = 1.2; 
            var timer = setInterval(function() {
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 12)
        }
        function randomColor() {
            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
        }
    }())