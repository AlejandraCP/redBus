import React from 'react'
import Language from './children/Language' 
import '../css/ed-grid.min.css'
import '../css/main.css'

const Header = () => {
  return (
    <div>
      <div className="main-header cross-center">
        <div className="ed-container full">
          <div className="ed-item s-50 m-50 cross-center">
            <img src="https://www.redbus.pe/images/home/sgp/r_logo.png" alt="" className="logo" />
            <img src="https://s3.rdbuz.com/Images/home/peru/partnerlogos/rbfooter_eslogo.png" alt="" className="logo" />
          </div>
          <Language/>
        </div>
      </div>
      <div className = "ed-container cross-center pago-efectivo-logo">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAACMCAMAAAADdDG4AAAAwFBMVEX///8hGRX/ygAdHRvxuAD/2oDirACQjIpZU1DHxcTx8fAvJyTj4uKrqKfV1NNLREFnYV49NjJ1cG2dmpi5t7aDfnyOdA5WSBT1ykArKBn4wQDxvwL43IDx1oD/1mD//ffHnwfjtAM5Mxj/3Ij87b//9t9kUxOqiQpyXhHVqgX/ziC4lAj04J9HPRb/2HD/8c+cfgznvDDty2CAaQ//+Of/0kD/4Zj1zlD/6LDv0HDpwUD54I/rxlD/6rj0xTD5y0gkhSDQAAAQAklEQVR4nO1daVvbuhIOkMZbVjsJFDiUsJSWUqB0L+e2//9fnXgZaUYzsh1ncS+P3i+QSLKT16PZNFI6HQcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBweHTufN9fXVw/Wbtj/Gy8T1j1c5vl05hjeNN99eIXx7cAxvEl8uXxn4cb3F2/UDzxv7/mRPI/LjZLjFW7YJzu4Sz1tTEt6eBVH8Ihn+JrC7PREObeym8PvbuGWreLCwm4rwFrRwQAmdRFSCBxu/YcuwCW+Gy43rCEM3jIeGAL8wft+UsZvpiM0SPKZsep2BwW+w0du1jasqejeshCeUzKWwxvSd0QZv1j6eq+ldusIbI9i0bKms+vStF+U//KlD7yYJ5ghHhr54OXg4qkfvVgkeEvdhvLX77B7PtenduJFDIN6av627tICzgt6zHG0RPHih9P4+Ovt6e7uPcHv79ezexu/m/eACsUBvGARTz5sGllBu2TxIm0vbB0GrlrJ7vC/i9ut3mePLh+18EG3eZunLqedrhRzFJoPhYIz19cT3BrRLMFMeYDRuzZW+stFbQvF2bFyo6Jh2hkbsAZyrvl7EOiw51gFfYPh6beUynsvozSkWGN6GCtbBcmiGHhli3XUotSOtEsasKWpHRZxV0ZviK7N4l1eb/iCakZElqabc4aEkuugJGG50wW8r8ntUh16J4c1qCMxIYibVgKCir5Xd5UjzWgit+CPdmvQKWuJ/m9MQQ8xI35Zwn+adZfZS5BaM623culNc16c3Zfg74fd5UwJM5HHU6cwyYfW9JFh6ZtoDyLWD5t5P21PnC94I03bkQfueN9MPo4Vg8GolelMlQUR4MyaOZiTTFNokHmhTpFyKjN4QHkU0hQ59eIe0741zbTuNcPNucboqvUsRxlr4ckUBNtRm9o1n/C0KkM6MXvUsNP+gqjPtmqDHlCPhI3aFezu9i/Pzx/l8/u5Q4+18fv5+2fTnvqEAg5ztaUJMJyrhowi9MNlnlnYQdaQK4JnuXvkeifQuPh++PrDi8HGBdcQqAjw16J0xMy/l0kG8U/qUz4b8LLBlqbzC0lIU6nYfjd8tfkv0Lkq4zfHxZv9WE1zfhTBdgsQMEETvH+hJpQ90A7ZT8ITSsfAoYmH87untSvR+rmJ3iYsbpISfv9S8nRGq7pmx7URUj9ApFUigD+sQGJ3+D1RPUbsvvLcTXIv0HnI2BXk+PEEE1wzirAFBIZJ6RqeVPLGfAyQ7fR9LcgHQB5lewVQDhDG7wZVIryCs5xLl75Eb8a2OgjAtmyG62tOaSUmFzDEQ6MP6ApwIosJhTNjZMe4ket8L9C5OPgr8niA/rY6FMy0bkVyd7prJPVJfgUhqAew4gBOGVS881MmGSKuPU4neG4HeJemSfsj6A8HVCsIS7C7js6mWLEvKIHcM4AFhy4bnPnh5WDXDmN0nHe4legXLlvJ4LrD+YR8TXOkCa8sW59GsN1j+MTrZUgYZfcTFLQCKpN+R1aw0Zjc4kugV1Ow7i1QfwpjcTavyIDRVdiOOFAi1bJm6HfPx4AlH+A74isKYHUGkd85xnjW84/ye7BOCyxeKUDWZ3cooPwF0MVGd2MUtgENiUc1i6d4tuqLnYAWX6w+oNYvkyhSwTt3Y65yUc6GmN1G3gnSCNUstH8k+GFdsIaOT0tutT+/JhUnvnLT/KVfA2iOYWfvwqIyoToFeHGhI9CbsijvDivRy92FudDgr84C1ZbMXmcasB1GdAn3Ymkn0TirvuS08rErv/ocKelMVfGkzcIrdEjXITT/QM8SXEK6a/j/k7SC80c6DiixoW43e/ccKepcq2BZhaMtW4uCD7dL0EsYI1xmoNWPTQ90UBxo7QgN6DfdBoPe49+uV6EBoy1byVSOTHzrfQbi1IqXt8HSi4vEkKsvRwkLxjwb07pPo+Ia3d3u9xZnEr7ZsQsoc4Bv8GGGuWnnwszgvDAKabVTte2MvGKDUhd2Ybg+nTeg9weZtwdt7KT794HfTlq1kVQaVO8Se583UoJw+e1IoDxpCS05usnvNC/SuuNh28laz+5E3H/dy3LG7qe9a5oGaGy0UCmnm9Tf0kclpjXZqdJrQS1Jnn3l7t6C3Z+oHbdlKPVBbQqcQP2vCp2x8SxVQDeh9TyKLD7wDsNtbGP6vLr0pUb3L6S9PbyXxw4oaHIH/UUslqGcr03tO4orXJcLb6/1Db9YvMjR+XK4HQ3PFKIM2TaGYDo6t7ZHXht5NcbQqvUbS7F2J8C7R9GMFMZXgyZhu5+7HfDEDZxsDlNMcJW2RC/TWdx3MTDDXDV1M7xpVlOlSWw6WD0btg6APTNJeYT48aXcH4mr0YpfBohuOMbumdtgKQI7bk1E7VqKXr7bxkK23a3qltbe/BpzeR5PCA1iSENbaWEzRXZve/jRdfx97A9nY900hBTNY6oxkGGbVlLZdLltBQS+ybeb8V0L6gbPLDBtVDRZ6i6+ZwWzDOyLE/GG0N4mTQHE8VP0rWWsj68vpZfnygzyvIKyzvWbCa7DLTVvATL4fIxqJRyXRq1znUebhaf+iehGY54K2D0bvicDuwbm4ynbwWKEaej0zrhAdWp2apfGsZPQT8QKWzhTwKHa5XMzolRbbD7jLIKoGxu4TvZmFG5X7NY7NkD6v7RSe6nQYX8LbAQp6tW2bCzxeSAU61Yq316NJdZvkqdlK6xvEjLvlGpb0cR8pd6VWWjBtml5JTC+kclTmk3F2qWGTN/vs6dmq5GsySyMCmYZEqj0T5ns/iX0iqyD3O10uZvRKlk1i/Nxkl5m13id6K8tGP13cAZnIiszscEZTNtFMehCgaVUb0LvT5WKgF5SvaNkYXs9ParBL7RrZ8I6hJjbohmoPNgwSLxtrd4/hVnrMIIuSBzsN7kx6RctmSu4jJ5ez+6/hNSiRG9uUH1+kbI72ivYITHoly0ZwOH/PuRXY/WncSImTdXKGTODWAKiCNhbYEIBeUL7Esn3Eivji8O38RqR2X3DJ2EKQMvlWwy0VgDQG3svSIr4b9BLLZiOzml2+TAzfV8q8DDOtqHrkmUTVGsAWAE/0WKe5FvZnuVYN8yQmKJo4e5W2JB782/eMO2Qo2tXzCOHCcdLclTvtEu1ALJuwElGP3U9CERTZV2lAXPzJNXCf5NUnpjDS5vRMDLE2ONGzx9NdiI5X8Ur+MiDX8ZuaA4NeYtne1mTXFN0n6UbwSYUSW3lpPStiYKvCY2z4+aKQL7t/U1KnJu5jUeKevhiy4L1hJK3ozbUDsWwspVCPXb7+3kExhSAH4n6LNGaTzsRAykVaMpbPgRiSsmB4ZoH0GbKdc8J0alZBZdBLLBuPHGqw+0kun1Zer9Am5hHGtlMblC8gsRvJoWGH1KnB/fBEAuH2O7ZCi2pvXMBdl2gHEv3WIdeMhJ8stacwjUXLNhakNLGtxyvXQ8q+jcOxQLpPt2MJOy2UfppaNy81qq+8IvQuiIfbgF1RMWAubHMsGEAPPzfroUgfuoQo8xlj/UC1ZcmLNHsxQIMD3JlebGKtsmgmvpreVDuQ2l2h9LGC3U/2jW3wmeOAQouEWTWtp6ifHqAVKCuX52R0KZmfTfLhIE1FFOqUh8RYYgV6UVWmdhniIA2l1WxosphH6SWWrVr11l9Ysx/nrXxKs6xXKQzGd4D5woFDH+wm35mJvQX4MJpeuHSEl0OKi2kV30Q7dLF2IBtThMRCGbuLsi1B1mSk9iTgDXOEpo8UmpauPfDsGEmgFf9rRYWuDJNEq9q18vCEXmzZhNLHMsXws3TDoPWofzV9zfV0+JooRQEyljIK9keuco9Rzwxk5xtwraJvtXMo1NMMccnL5euji7QDsWxC6aOd3UVFOY61aFRNX3MvK4ibsH1tLBFIwAgRC9wVvegECHiEWNGucxjEERJfYtmE0kerYigX3Y7sRME3ymF4S9K+dsxR+UbAPbOVJtAMekOkOaRU0DqHQWB6iWUTqs416kQS0vdlUN6O8R2khCJSDuVb3PnuILqPe0bpxU4bW+TorHcYxD3SDtiyXdRWDDUqcfTmHI9C+5KGOIIUTdCyBsoKSdviNXgunTJUPDtYdUPxcumW2SZ5nVNEL7ZsQmWpqBj+rXNMkQqE7F2MHtaFub1s4pZvceeiT6+ekFfw7P2O/NjWSvP/0OySQzKEDT+CYqgyacb3tXvmRi699Gdvgqot7qzsDBic0Jvlr3CGR3psa6X5UVyBs5G8vklSDHUr9IAN+yqtcYaI3U/OWSm3bNDK9nz79OrZCzBsGfWSFcMbwlfGF6QcbvT5AjZ2sWJ4qn18WVkuPYdxvJO11mkvmwIV8xVaVWRgCGWIR8OtMl9Bsmx8j/Mq6GKU2DNTdH+tUHkO39fu2hjW2XKWTiZlg6r5Cq3aPpm6BN9sgjrT6KPAOlFFdkwcidxKgER3IWwKtKIsl17AELgKX0g6joi3avJN2x/pq5P8jvTY1lzAPqorvlh0rYlHEWW59BzmgRZAr2URsdxxmLFW8/6+preY+nmKQaJ3zYqJ02498cX7qVY8VHZlx0HRW3FBmV4YzPZ8j4wegZbNmfgxUtSvHRJx160jvsfNyaUrLTJMviqUQzm9LF3BdEkh31N9pXyaCKG4iogarsZfdWuIb3cNcjVZdnrNUB+stcUZKi3H47l0pi089XpCiFdDNZdg2BrvjOlWiu/JWuSihI41IW0e76QOEKHGcJjk+ytVFIibgZLyXHqGAdA7Na4Dgg/PTVcCNC73+V0hvsfd9chF2d6RpZ6R2R41JSMo8w2DJPuRleylsubFmQ9h4I0UndwWMW82gLlhpibVSlBeZzhQsXnzbV3fy8UXyF2s5i1gWI8QAHPB96ahnMMEHxRXPAD9OlK5HuBILUtOi8U8fs5WQW/ENnSiVeLIx2vOzXcMnHZL+AWT9qs5uSUnXIAy5Gdr2Z6IEdZizMShvugP0JEoP2ZJJa2x3eXBpPeYie7Tmr/BZFusgChK8AQsCXgw/kIpGUwFSr0v5o7pYjsKJuVkx1qHHP228ZuTu/hn7R+nsJ1wYVaEBJVDEnuzGky488QzUcnTIf6HNG3WO0LqzqQ35/d4fa2gYCELmqUEmDhkFlqb9dIuyQdNxaQBFtIR9WcYv2v/LDUT3yW/GbmLnxv7WSDp97+U+2PSLQ/x6cEMpJn8nBtelx4qRUvyNJrEsekt0vLIDRy1ccXo7aZ64WmVtE01pvpMp3TLKjpqwZoAm8aF5PljL2BfM0zyTa+RPzNScf3iVhM/VQjT4lgI0iXI3LxJLHmKw2I4v3AzcPXQPbrb2o+OMqyVsP5/gMHv7/st/iQxByjHF/bb8AjXKLg426xSqITKnf+N54lsCtd3p9+Pvp8+b+lnRkWMSUD2kn4992+AsQO+3VOFXh5oHbgT3g2D1E2OXrLmbQU4FeE7djeNKQTDk9jp3W0gFI+DcnBwcHBwcHBwcHBwcHBwcHBw2CL+A4kDETlIg8E2AAAAAElFTkSuQmCC" />
      </div>
    </div>
  );
};
export default Header;
