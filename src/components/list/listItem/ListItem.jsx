import "./listItem.scss";
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import {useState} from "react";

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);

    const trailer = "https://www.youtube.com/watch?v=T1NeHRuPpoM";

    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYYGBgaGBoYGRoaGBoaGhoYGhgaGhgcGBgcIS4lHB4rHxkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDY2NDQ0NDQ0NDQ2NDQ1MTQ0NDQ0NDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALEBHAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEcQAAIBAgQCBwUGAwUFCQEAAAECAAMRBBIhMUFRBRMiYXGBkQYyobHBFEJSYtHwguHxIzNykrIVJXOi0jVDU2NkdKOzwyT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgEEAQQCAwEAAAAAAAAAAQIRIQMSMUFRBCJhcRMygaHxkf/aAAwDAQACEQMRAD8A8njxAR7TYyGiitHjAa0Vo4igBExSREVoANFHtFaACiijiACAjgRSUoRG0a0nIwAa0nIRQAkZGK8UAFFaPFABorR4rQAa0UePaAEYo4Uk2AuToB3909J9nPZsYZUqVFD4mobIl9KYIuST+K254bDiZnOairZcYuTpHHYT2axLkDJkuLjOQpt3ruPMSWO9ma9MX7D9yNr6EC/lPT63Q9VFLirlc7m2Y+F2O05jH410ulQGoODJZSO8rsfC0wjrNs2ekoo89dSDYix5Rp0HSmFzKWOjAEhiLEgDZv1nPzpjLcjCUaYoo8aUSKK8UUAGtHkrRWkgQtHtJWitACNopK0VoANaNaTjWgBG0VpK0VoARtHtJWitKAa0cCPaKAiJjSRkYDFGtHkpIEIpORgA0eNaPACUYx1EREoCMcGK0kqE27zYd5gB0/sVgg1XOyg5AGF9SPwgKOJ7+Ct3Trh0xlxBrFGdVApIq21a2ZzcnheAdCdGinTRHd8zDMyIoViLXylrZzv97mLaWgP2ym+IRK6ZaYfJ1dzYKykAG2wuyk/GefqS3Tvo7IR2xOt6Yq4mqUemrtSZAypTZUOZxdWdiQcvh6TnOm8MaVszXcam2viNd/ObVDpdkqOp6yob5FCinTpqBawUEhmsLXO0wPaCpckt8YRLmsGJVxuc2AynUDTKGtuCAeXdMDFJldhtr89Zpu7l1BAPZuoAtvfU82gOPvnIO4PzAt8LTq0jk1AOKSyx7TajIhFJ2jWhQx48Ue0BDQ7B9FVKi5gAqDUu7BEA55juO8TW9muhkYdfXt1a5mAOqkJfM7jigIIA+8d9BrmdPdNNiqmbVaansJyH4m5seJ4bDQTH8jlJxj1yzXZSuXfBH7HRGjYpL7dmnVZfJsguO8CWL0G7qWovTrgalabN1gHM0nVXPkDMxVk0JUhlJVgbgg2IPcRtL2vpkWvA9Wiy2zKVJFwCLG1yux71I8pXaG9K9JPiHR6mrimEZvxFWYhu42YX7xA7RxtrInV4GtFJAR7SqEQklNiCRcX1Guo5aaxWj2hQGyvRiNkVytNnGa1N2LAZmHaRycwsvvK3ZvcggEyeO9nHzf2YAUglQzEt2Rrfs6nQ6KW43twxziXyZOsfJa2TO2SxJJGW9rXJMpKnmd77ne97+NyfWZbZ3yabo1wG4/ol6IDPlKligKk6lSwa1wDYFSLwC0tquzlcx91Qo38z4k3JPEmNaXFOskSavBXaICWZYssdCshaLLJ5Y4WOgsryxZZbliyx0KyIWIrLAI+SOgsptCcNiWQHJZSfvcQAb6cPO1++V5Z2Hs10NSFNq1YByxApqCRlAOrNYght9Dw15SJtRVsqKbdIt6HNZkV8+UkFnOQDQsAALDViAxHjpM7prKWdnBBbX0Fl05WA8Z2VLokuGyPkBHYS1+OpsR38Oc5rpr2exAckpnUsLdWddrWN9uPdOOWlK9zVI6Y6kf1u2Qw/tQaNMoUGc6dZlBOXYC/OCFHxDZmJI+HpD8D7HVKhzVjkW98qm58Cdh5Tq6vRyU6ZCAAhdL6fORdGmXycD0hTIdLWWwtm2IH6/rMXF0rNfcNqPUg/EGdF0hhWyM5XW4OovoSVmM9JmOuvDwHhOrRcats59VPpGeVkSJoP0e19CDc2Gv74QbEYdkNmFjv3Ed06XGjnUkwe0VpICSywodkSslSpFmVRuxCjxJsJZaFdFAddTv8AjUeZNh8bSJ+2LZUctI6f2ofqsAFQZQ7pRFvwICxF/BFvzzmcIiaTt/bWmfsdE3uFxTqf46eZR6AzjgJzejVws29Q/dRWBNrCYNDgsRVKgujKFbkDUoLt4O8ycs3MGf8Ad+KH5qf/ANtD9Jtq4S+0ZaeX/DI+z1Ogwda6gh2VFa3aQur3KnmAtwOYG95l4/BPRqPSf3kNjbYggFWHcylWHcRJIP7BraHraZBG4slXY+k3ccPteFGIAHXYcZaoG7Ub3zAfkY37lc69mRbjO3w/6ZVKUa7RkPSUVKAyizJRLDmWIzX8YV7RIlHEMiIgULTYArmILIrHU95Mpqf3uH/4dD5iW+1GuLf/AAoPRFhzNL4YcRb+UW4Xo9MVSdqSdXXpLnZFLFKqAEnIrElHsrEAGxtawuDJ+ymFRxiC6K+WkzrmF7MqVGBHmo8ZP2KbLib8Mhv4B0Ot/CR9j3AXFMLWFB7A3sRkqAA6g7ac5E5Sjuj4qi4xUmpebMZMd/5dL/IP1mn7L00rY2mr00KOWBTL2PcbYE3GovvvMqhiFt/c0/Wt9Kk2/Ycf/wB1HuLn0R5rPEG1jBnHMkvky3xeR3HVUnVXZcrIALBiPeTK3DcEQrpfAItOjiKVxTrBhkJJNN0JV0DHVhcGxOtrHjYSwnQxxGJemlWkHL1DZutGzMWGqWJAvpfgZHp3GArSwyKwTD51JcAM1RnPWEqCcozAgC8lSzFR57+imsO/4+y7pcrToYQpTpgvSYuSiEsQwsSSN9bTKbFkggpT14hFUjvBG02enagXDYG6I96T+8XFrMBpldfjfaYzuDsiJ3qahv8A53Ij0vcs+WKeHjwjSbDp9gD5Fz9eVz27WXKNL8rmZSCbFf8A7OH/ALg/6V/WZVPaVottu/JOoqS+kbNfCoOj0q5Fzms6FtcxUZMo8NW9ZiBZ0ONP+7KY/wDUVP8A85homkNFtuV+Q1KSX0XdFIgqB6gzU6YzuLA5kFhlseLMyr3Fr8IZ7TdHCjiGCW6t+3TK+6UaxGXu1BHcwkGpBaSqXVWqHOwYPfIt1pjsqdyXbvGQzQcddhVTOrvhz2LB7mmbkLdgNtRoOCRTbUlLrhhFKSce+Uc+qTrPYykSxVygRgQt2UMXveyDc6A3/rOcRbiF4Nyjq40Km4P738J0uG5UY7qPSMQiUQCmjdzE6ctTaDK9SocwvkB3OgPOX4bHpUYLkzMdbcu8D8JhFaqhBFyDtaUpL9ezOUXW7oGTHgHKde/f1tDMVhlcA7i3AzJajqMpAF7OTpcNxHhrJ0sR1bkFsyEcybcu6Ya3pk1ujz4N9H1DWJGZ0yutrC1rTn3o21AnQdOOL5gQQflBGwvYubATiSfB2tmJcEZbai9j5H+fpAelh7mt9/EbfP6TXRbNbgbjXQg7ehB+EzsZhVI/Nqb+hyz1IxbgmeY2lNpGOBJZZPJFaQkaDWjoxUhhuCCPEG4iAitFQ7O46TVcVgKjIO1ZcSo5NSZhVXxCO+nJR5cEu02OgOnGwr33Qm5G+U7ZrcRa4I5HjsX6Y6JUXr4Y58O12suponco4H3Bwbhsdd+PRX4pOEuOmdGq/wAiUlz2ZFppUsWi4OvTLDO7plXiQHot8kb0mYGhGCwL13yU0LtyA2HNjwHeZ0zSaz1TMYtp4GR16ll+9npkD8oSoCfUr6wvoHpI4asr7oQUddwyMLEEcRqZV0lh0psER1cqvbdTdS53VSNCFFhcbm8FtDapRfhhual9Ghj3ojEp1T5qSmnlbXRFbZri9wJPprJVxLulWmVYJa7EWsig3FuYMy0piLq4lpVTvjA3O7Vcmg+NSjSenSbO9QZalQAhVTiiZrE31uSBv6Wez2KSmmIV2C9ZSZFJvYko4A0B4sJl5JZUw7DdSN9xybKf+bTxilpJppvkFqNNV0PQwgt/eUh/Gfos0PZ/EJQxSO7jIjHM4zEaqRcaX48pmthWHA7X8sub/Tr4SQwr3K5TcHKf8XK/Pug4ppxb5QJ1JNISYhkrtVptYrVZ0b+MkeRHzmh7QYqlVrCshu1RFaotiMtQCzakWNxY3HHNAUwrD7p2v5af9S/5hzi6mx13goK011gHN00+w7pKolVMMgdFNNCrZs41LXsLKb/zgz4RQL9Yh02HWXPhdAPUiRakDHFKVHT24TJc7ywp6yNhRRzqr9aX7Wa1rKBqAeRlFLCL/wCIn/yf9Eg1GOlOEdPa3T5dhKe5K+jRrYhHwlOhnVXFSo5zZrAMUtqAdeyfhKKeDXS9WnbjbrCbd3Y3lQo3kuplR0trbT5dilO0k1wNVOdy1rX2HJQLKo7gAB5QjA1OrdXvYe63+E7+mjW5qJFEsI5QTVwUouL4ZCm1Lcit8mdshupNxpa19xY8Ab27rSwIToASToANSSdgBzkkoAazsPZvofqyMRWFra00O9+DsOHcPPlJlJaMMuxxi9SWP8NFML9mw6Z2tUC3dgbG51K3G4Gg8pxdXp98+ozqWOuzd5B+k0PanphqjZF24zFoUNVHI3+E5/Tacm3J9m2vOKW1dHUU8eHQqnabex0aw37j4wDEYlsuqkWsR3juIlPVW1FweYgOMxL/AHiW7yTmt4z0E3E89xUrXkJxOLDLY6DlDcfi1KIuZdUU6akeXPSchXrsdrjzkaOKddzoPlrp8ZjLY5bmsnTFSjHamdE2IO4UaDewubc7CZVSqLtcEH8th6+sWGxjt94iVFY1qKWEJwceSnJI5IUEjZYbQ3AeSSyywyDPMyiiosrw9V6bZ6bsjc1JHrzk2aRkuKfJSbQQ3SdQklhTZj95qFInzOTXzvFW6SrOmQuQn4EC00PiiAKfMQe0dREopdDcmJEtJXj2itLJHEREdBLVWAgyr0UQzjN2Vp5wfxdknKO8FXB/4ZksRTfqldj2XchltaxZjUQgn8Vn24Kt+Ep+1Ppc3A6ywO39oCH9QT4cI6V2s40s+TMLaf2fuW5W204EiZbZYs03RzQfXwRVigdgAK2cFbHJRQpnUX7QZVawP3lOtpCg4dmtcG1SqQxBGdFDKQx2uAV7gZUMc973F87ONAbM/v2v91uK7d0ZKpBNgq3VlIANrOLNx5ad0S03WeQ3q8Eq91Snsc6EHW4Cq4QAFTr/AHanzMmcIHrhGLHP1fa0B/tERiTmJuRm2vdjxuZQ9yqg7KCB4Elj8SZLrWzZrC/ZsbbZAAtvAADXlKUZLj5FuT/orNDx8xY+Y4RyhtCqIJ33ML6kWmyRi2ZaJLuol5TWXKoMpCbBFSIoYX9nlgQAR0KwHLI5LQuqltZs+zvRAf8AtqwtTXVQf+8I7vwD47c5M5qEbZcIuTpB/sx0KqIMRWXU600PAcHYc+Q4b72tPpvpQBSSbsdFHG/hBumfaLO2RNfCZlLAszZ6ja8AD9ZxR05a0t0uDslOOjGogJ6PqC7Oup195SR3WBvHSiysLgi4JHhabP2I20UKN7n9NzLMNZLh7FCLMSALcezxnpQjSwefKW7LM3PpM7GEfCb2NwqAXQgg7Hh5Gc7jUI33tNHTVmccMy3tHqUewee8amt3ty1mhk0nO1do6d1UZuBfWH5AYK+AH3SVPqJSXdPeBtzGo9ZzOM4O0b7ozVM0Ori6uUUMcp3hoqL+Kax9RF84MnotcZMZmkDLSkgVgBWViVI9pJYANliyy3LHyR0KyoSQWWpTlgpx0KyhUlyrLVpyxKcdCsoCSxUlop3muvQhsLut+Itt4HjBITdGIiS3qzNXE9G5Rdbm24O/iOcGRG2ym+9rG9udomqC7B1GkSpLrrxlbLyiGTpuBCOsuIGqQzD4F22Q+enzggaRXlhFGnLVwNQbo2ncT8RChh2A9xr/AOEykSykpCWwiKmetUFO/uLbMzDnluLCW0MAT75yjcjjYc+QmP0jiGeqxQIFvbt65yNy2h05DUCKam17StLbfuOgwOEwyjOW63iBbKvmLm8G6UxL4h8qtlproSNv8K8P3xgVOm7am1zb7ykAdyrv5iaNEooH322AA08htIjoyb3ajv4NZ60Uq01RThsGq3VAO9jufMzWwtBQl73/ADc7cu6U00JbtAW/ADpb8x+ghSdskk9hd+8jgJu+Dm7Kn1BJ0QbX+8RxP5fntMys+a5OijYfIngWN/jCsfWZ2yqNBbbu2HgIFjWCDL7zHhwv3+Gvx8rihSYGxI7Smy8r9nTiO/heZmJcNf0/pC8TTJGZzoNh9JlVQb5jpwA+npr5S7oErAmqFG0AJOmvr9IfhK4fQ6MOHMcxKQgza8tP1j1KWXtAbSHF8l2gwrIKsjhqgfuPL9IUtKQAM+ERt1B8tfUSP+yk/MO7MZpIgllhFti+ULdJcM5qMUliJLRRMzo0sFKR1pwnIeUtGGjSFuB1SOEhSUosndLoVlAS0kqXlpSOg4RkjKktp0iTYCGYTBg6v6fzm7hMOg91UvztfyvEwsy8NhFQjbNzJ+X6zRpunEA7bWhqovFAf4QfjEiA/lHmPnKTRm2ygANsAPG/1kqZB5eW0uYBuze/pIphFXtBvK8eBWxmwYY5uwTzZQT6yD4Y/hQ+CiWZtCbm3O37vHpOG3Y+QP0htFuB0pZTooHkJNHYmwXz4f5pdpfUG3AHURnOnHwGgjoByVXcknkplyu21go79T5wZcXlGlh4SuridLnjsOJhtsLFj62mUHTief75TNwWBzkkjS/KECkXuW0UbCaCMLWT1lN7VSGs8gz4FV04+H85JECeJ9TLq1l4En6yKIVNz752/KOchWyt3/CSUyxyjQn3j+Efr8oTWGgROyo0uPpGw4Ci/P1PeYJiMWRdR7x08O6/zMdWx3Stir1FprZfDvJPPnM5Uvqd9bnz18h8Zeq31Ow9SfpBMbW+6NhqeWn0lJEN2B46qG1vZV/Y8WMzSMxGlhvbkoNz5m0tL9Y9vurrfnxLHylZBN+Gb4D+Qt6ylELpEAua5G4AI8Ln6S5BcfvziwJ7TDkvzOg9AZKgRx5fv5SkqBsCxOGKEMux104HumvgG6xb/eGh+hlJsykHTke/cH5wfDVmpOGtps693G373mU4+C07RtJREf7MIclMEAjUEXB5g7SfVTOycnGJSMPw9PnB3JEirsJmmbtWF1kHCPSHC0rQk7w+hTFr3tKTJaKThY7U+FocqE8JYMNfeNMizDrIQbCPQFteM2K2DuDbext420nNpV74xp2bdJr63E18LbT5TnsHiAO+80sNjVDD0hQNGrUqW2MitXSxF4nqKdbGV0SL7fCNIhsIGS22vp8olqKBYKP34xVMlr2+JgzPqQI0hMKbEC2th6QZ8aBov8/5QSopvcm8patwVRfif1JlJIktq4sk8tZe9Zm0PZHIbwDOBx1/e0mlQ30lUgCgANBueckD368+Q7oOXsP3+7RUm4njsIWVGIVnuLDQCEJVy7D9YNS138hy74SLLvva8hjbJZrakdo7fv6yK6nw3PM8hKHra79o6AcfSTSxFtbcSOJ5A8fGNIhO3kuq1TqF34ngPEwSlTFzY35tbQfr3D5yZF9NlHAbD+cGxWJsLDyXu5tKiuhSleWNjMRYWH8I4+PnMrHsQoW+p979PCEoD751PDvPE/T1lFOnd8x4fOVSEmymlRyo3Mi3lu3w085EroT3W9f6j0hdddAPL13/AH3QTEv2CeZNviB8xKRTyQwIuC34m+A0HwlYNreF/nLaWgH5Rf4W/SDu3Pgo9T+zExouFQAHnp85KtUXjx4QMvcgevkNfjKOk2sVty/p9YpPA0rZ03s9jRpSb+A/HL9R/SdH1U8vw+JZWFiQdweIIOlp6xgHL00cjVkVj4lQfrOaWGatHIp0cdjLB0Qbzq3wote2sop4dybKtu+YbjSmZA6OVV/d42HwF75gRynQ/wCzbbmP9jsL317zHvFRilMosBaSNJt9u/hL8fUVA2b3raW+HdMrD9LMdOXBtfTnGm3wS4mlSS/G84bGU8tV1GwdwPJjOjqdMPqNF8FH1meCurFFJJJJOtydTNIpgsGdRDHYQnrnU2bQ9417oczLlNkXbgT9ZHD4m1gQDba41Hgd5VA2EUcQ+mhv3g/pL3xtt4PVx5O6iUPjeFl9PrGiXE1P9oEjYA98B+0PxYa+cDbE+EqNWUhUFu+vaa47oxq8BBgTbWHYbAMx1GUeZJ8v6Q3BRUovwhNJOABPgJpUOj0Ua+pMIWoi6KCYOQUjPTCOfunz0+ctXC5dXZR4a/yhD1mO+glTUs3Anvi+xSItVX7qknmTp6SmrUdjYnyGks+yNzCjx+UdEQHKupvqx+g5So10Zv5Gw2H5fxHn3DkIQUbuA+AEizoNdT8vICCPiWc9m+kqmyXJLBfXqDYbf6jBxRztbzY/IRhScnZr8yDaEdUUW2xO7Np6DeO6FV8gONfe2w0HhBlQ28TCatMXtmHoYyC1zmGm2u3lKQAuJe1/yjTx/ZmfX1KLy19IXWQnS4Jvc+HDeCFDnOh2AEplRyixnst/xH/lEAepoSdz9Tp8m9RJ42pdsigm2lh8f33S2j0W72zHIo7R11O1tOFgOMmrLtLkqwVK5JbwCjfz5TRroOWwtYa2/nCKGERNF15m4Hx1PpaUYvTRbW5Dh5xpUZuVvAAya6X8xb4wjr6htd6mgsLs2gGwHdHLBV74HU6TANtZLcVyaKMnwejYfpRntsJo0+krXGUk9056lhHXbjLAag0FxztPMcfB2Wbq9Iqx7QK/H4SrpAsyMUGoUlQb6m2g9ZHopMvaY+ohmJ6RTgZOUx4PM63Sz1QA9gQbmwIJO2t9ra6QYVraiV9OJkxNYXsGcuum6uS2ngbjygyVJ0x4M5IMesTxPrElQwYtF1kuwo0Frry1/ffIdZA+tjGpCwoOarcb/GVHEDjBUDObKL/L1h+G6LB1djbkunxO/pBCaRUlQMbKuYngAb+gmjQ6PqHcBB36n0H8oXQVUWyLlHHmfE7mWK/KMhstw2EVO88+PlyhaV7aADx3+cFRSd5eqiJsVMk923N5YqGRR1WResx20EZMscsud1XcC/rBquKY7aSIp31/qfCOotY7d1vnKikS2UO54m558vCQL2Bty+e5hTVrbePKCOrMNdZrExfIGuKY8fCFU8S5GpJg4wT30U7wxcKQOX75Sm0QosuTEHifnKa7MTcX3uJJwOevpB2qcJKNMUDVn19YOr9/jCMTW01Ez2GtxtLTEot5Jh9bxhWYaAmUFiDrGauZQuArrdi1ifD9ISMWLZbb8tvSZy4kcpVVxF+NvCK0h5bDixN9fjr6QapiAu8D6/vg9eoGvckeEmTwawyxYvHXuOEE66F4LBZ9wflD6uBoqbAjvuxvfjstpzO3lnSmlhHpKydOKKcxY1TaBvFFEBxHtf8A3qf4G+ZmWvDwEUU1iD4LTIGKKUShok3iigM1cH7nmZoLw8IopZATU95vGSpxRREl8nwiigN8EV3hEUUZhL9iFTcSdT3YopSEwGrCaW375RRTXoz7LTKa8UUQwCpv++RgZ3iijXIdE63ueY+sz13848UoqIqsEeKKMTKR9f1lRiiksaKKnGV4TjFFMpnRpmtR90+B+kHfeKKQV2f/2Q==" alt=""/>
            { isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>2010</span>
                        </div>
                        <div className="desc">
                            Velox, pius caesiums saepe locus de noster. unda absolute ducunt ad bi-color amicitia.
                        </div>
                        <div className="genre">Romance</div>
                    </div>
                </>
            ) }
        </div>
    );
}