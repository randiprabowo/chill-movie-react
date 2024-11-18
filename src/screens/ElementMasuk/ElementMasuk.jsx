import React from "react";
import { Logo } from "../../components/Logo";
import "./ElementMasuk.css";
export const ElementMasuk = () => {
  return (
    <div className="element-masuk">
      <div className="frame-wrapper">
        <div className="frame">
          <Logo movieOpen="https://c.animaapp.com/e4S1qI2e/img/movie-open-1.svg" />
          <div className="div">
            <div className="text-wrapper-2">Masuk</div>

            <div className="text-wrapper-3">Selamat datang kembali!</div>
          </div>

          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Username</div>
            </div>

            <div className="frame-3">
              <div className="text-wrapper-5">Masukkan username</div>
            </div>
          </div>

          <div className="password">
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Kata Sandi</div>
              </div>

              <div className="frame-4">
                <div className="text-wrapper-6">Masukkan kata sandi</div>

                <img
                  className="eye-off"
                  alt="Eye off"
                  src="https://c.animaapp.com/e4S1qI2e/img/eye-off.svg"
                />
              </div>
            </div>

            <div className="frame-5">
              <div className="belum-punya-akun-wrapper">
                <p className="belum-punya-akun">
                  <span className="span">Belum punya akun?</span>

                  <span className="text-wrapper-7">&nbsp;</span>

                  <span className="text-wrapper-8">Daftar</span>
                </p>
              </div>

              <div className="text-wrapper-9">Lupa kata sandi?</div>
            </div>
          </div>

          <div className="button">
            <div className="button-sign-in">
              <div className="text-wrapper-10">Masuk</div>
            </div>

            <div className="text-wrapper-11">Atau</div>

            <div className="button-sign-in-2">
              <img
                className="element"
                alt="Element"
                src="https://c.animaapp.com/e4S1qI2e/img/2991148-1@2x.png"
              />

              <div className="text-wrapper-12">Masuk dengan Google</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};